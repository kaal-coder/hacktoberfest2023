#include<stdio.h>
void main() {
    int a[20], p[20], i, j, n, m, temp, b[20], temp1, temp2, c[20];
    printf("\nMEMORY MANAGEMENT SCHEME - BEST FIT \n");
    printf("Enter No. of Blocks: ");
    scanf("%d",&n);
    for(i=0;i<n;i++) {
        printf("Enter the %dst block size: ",i);
        scanf("%d",&a[i]);
    }
    printf("Enter No. of Process: ");
    scanf("%d",&m);
    for(i=0;i<m;i++)
    {
        printf("Enter the size of %dst process: ",i);
        scanf("%d",&p[i]);
    }
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            if(a[i]>a[j])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
            if(p[i]>p[j])
            {
                temp=p[i];
                p[i]=p[j];
                p[j]=temp;
            }
        }
    }
    printf("\nProcess\tBlock Size\n");
    for(i=0;i<n;i++)
        printf("%d\t%d\n",p[i],a[i]);
    printf("\n\n");
    for(i=0;i<n;i++) {
        for(j=0;j<m;j++) {
            if(p[j]<=a[i]) {
                printf("The process %d [size %d] allocated to block %d\n", j, p[j], a[i]);
                p[j]=10000;
                break;
            }
        }
    }
    for(j=0;j<m;j++)
        if(p[j]!=10000)
            printf("The process %d is not allocated\n",p[j]);
}