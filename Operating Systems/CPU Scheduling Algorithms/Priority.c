#include <stdio.h>
#include <stdlib.h>
#define MAX_PROCESSES 10
typedef struct
{
    int pid; // process ID
    int burst_time; // burst time (in milliseconds)
    int priority; // priority (higher number means higher priority)
    int waiting_time; // waiting time (in milliseconds)
    int turnaround_time; // turnaround time (in milliseconds)
} Process;
int main()
{
    Process processes [MAX_PROCESSES];
    int num_processes, i, j;
    printf("Enter the number of processes: ");
    scanf("%d", &num_processes);
    for (i = 0; i < num_processes; i++) {
        printf("\nEnter the burst time for process %d (in milliseconds): ", i+1);
        scanf("%d", &processes[i].burst_time);
        printf("Enter the priority for process %d (higher number means higher priority): ", i+1);
        scanf("%d", &processes[i].priority);
        processes[i].pid = i+1;
    }
    for (i = 0; i < num_processes - 1; i++)
    {
        for (j = i+1; j < num_processes; j++)
        {
            if (processes[i].priority < processes[j].priority)
            {
                Process temp = processes[i];
                processes[i] = processes[j];
                processes[j] = temp;
        }
        }
    }
    int total_waiting_time = 0, total_turnaround_time = 0;
    for (i = 0; i < num_processes; i++)
    {
        if (i == 0)
        {
            processes[i].waiting_time = 0;
        }
        else
        {
            processes[i].waiting_time = processes[i-1].turnaround_time;
        }
        processes[i].turnaround_time = processes[i].waiting_time + processes[i].burst_time;
        total_waiting_time += processes[i].waiting_time;
        total_turnaround_time += processes[i].turnaround_time;
    }
    printf("\nPID\tBurst Time\tPriority\tWaiting Time\tTurnaround Time\n");
    for (i = 0; i < num_processes; i++)
    {
        printf("%d\t%d ms\t\t%d\t\t%d ms\t\t%d ms\n", processes[i].pid, processes[i].burst_time, processes[i].priority, processes[i].waiting_time, processes[i].turnaround_time);
    }
    printf("\nAverage waiting time: %.2f ms", (float)total_waiting_time/num_processes);
    printf("\nAverage turnaround time: %.2f ms\n",
    (float)total_turnaround_time/num_processes);
    return 0;
}