//DEFAULT ADMIN PASS IS "admin"


#include <bits/stdc++.h>
#define cntr setw(70)

using namespace std;

void adminMenu();
void mainMenu();

//*****************************************************************************************************************
//                                              CLASS DECLARATION
//*****************************************************************************************************************
class Books
{
    int bookId;
    string bookName;
    string authorName;

public:
    void createBook()
    {
        cout << "Enter Book Id: ";
        cin >> bookId;
        cout << "Enter Book Name: ";
        cin.ignore();
        getline(cin, bookName);
        cout << "Enter Author Name: ";
        getline(cin, authorName);
    }

    void showBook()
    {
        cout << setw(43) << bookId << "\t\t " << bookName << "\t\t  " << authorName << "\n";
    }

    void displayBook()
    {
        cout << "\n\t\t\t\t\t\tBOOK DETAILS\n\n";
        cout << "Book Id: " << bookId << "\n"
             << "Book Name: " << bookName << "\n"
             << "Author Name: " << authorName << "\n\n";
    }

    int getBookId()
    {
        return bookId;
    }

    string getBookName()
    {
        return bookName;
    }

    string getAuthorName()
    {
        return authorName;
    }
};

class Date
{
    int currDay;
    int currMonth;
    int currYear;

public:
    void setDate()
    {
        time_t now = time(0);
        tm *ltm = localtime(&now);

        currDay = ltm->tm_mday;
        currMonth = 1 + ltm->tm_mon;
        currYear = 1900 + ltm->tm_year;
    }

    void showDate()
    {
        cout << currDay << "/" << currMonth << "/" << currYear;
    }

    void resetDate()
    {
        currDay = 0;
        currMonth = 0;
        currYear = 0;
    }

    int getCurrDay()
    {
        return currDay;
    }

    int getCurrMonth()
    {
        return currMonth;
    }

    int getCurrYear()
    {
        return currYear;
    }
};

class Student : public Date
{
    int univRoll;
    int currSem;
    int studentBookNo;
    int booksIssued;
    string name;

public:
    void createStudent()
    {
        cout << "Enter Student Id: ";
        cin >> univRoll;
        cout << "Enter Student Name: ";
        cin.ignore();
        getline(cin, name);
        cout << "Enter Current Semester: ";
        cin >> currSem;
        booksIssued = 0;
        studentBookNo = 0;
    }

    void showStudent()
    {
        cout << "\t\t\t\t" << univRoll << "\t\t" << name << setw(17) << currSem << setw(15);
        if (booksIssued == 1)
        {
            cout << studentBookNo << setw(17);
            setDate();
            showDate();
            cout << "\n";
        }
        else
        {
            cout << " - "
                 << setw(16) << " - "
                 << "\n";
        }
    }

    void displayStudent()
    {
        cout << "\n\t\t\t\t\t\tSTUDENT DETAILS\n\n";
        cout << "University Roll No.: " << univRoll << "\n"
             << "Student's Name: " << name << "\n"
             << "Current Semester: " << currSem << "\n\n";
    }

    void addBooks()
    {
        booksIssued = 1;
    }

    void resetBooks()
    {
        booksIssued = 0;
    }

    void setBookid(int bNum)
    {
        studentBookNo = bNum;
    }
    int getUnivRoll()
    {
        return univRoll;
    }

    int getCurrSemester()
    {
        return currSem;
    }

    int getBooksIssued()
    {
        return booksIssued;
    }

    int getStudentBooks()
    {
        return studentBookNo;
    }

    string getStudentName()
    {
        return name;
    }
};

//*****************************************************************************************************************
//                                           GLOBAL OBJECT DECLARATION
//*****************************************************************************************************************

Student st;
Books b;
fstream stu, file;

//*****************************************************************************************************************
//                                        FUNCTION TO REPEATE A CERTAIN TASK
//*****************************************************************************************************************

void doTaskOnceAgain(string question, void (*f)(void))
{
    cout << question;
    char choice;
    cin >> choice;
    cout << "\n";
    if (choice == 'Y' || choice == 'y')
        f();
}

//*****************************************************************************************************************
//                                                  BOOK MAAGEMENT
//*****************************************************************************************************************

void addBook()
{
    system("cls");
    file.open("BookDetails.dat", ios::out | ios::app);
    b.createBook();
    file.write((char *)&b, sizeof(Books));
    file.close();
    cout << "\n\n\t\t\t\t\t\tBOOK ADDED SUCCESSFULLY\n";
    doTaskOnceAgain("\t\t\t\t\t\tDO YOU WANT TO ADD ANOTHER BOOK?(Y/N): ", addBook);
}

void deleteBook()
{
    system("cls");
    int num;
    cout << "Enter Book Id: ";
    cin >> num;
    file.open("BookDetails.dat", ios::in | ios::out);
    fstream file2;
    file2.open("temp.dat", ios::out);
    file.seekg(0, ios::beg);
    while (file.read((char *)&b, sizeof(Books)))
    {
        if (b.getBookId() == num)
        {
            b.displayBook();
        }
        if (b.getBookId() != num)
        {
            file2.write((char *)&b, sizeof(Books));
        }
    }
    file2.close();
    file.close();

    remove("BookDetails.dat");
    rename("temp.dat", "bookDetails.dat");

    cout << "\t\t\t\t\t\tRECORD DELETED SUCCESSFULLY\n\n";
    doTaskOnceAgain("\t\t\t\t\t\tDO YOU WANT TO DELETE ANOTHER RECORD?(Y/N): ", deleteBook);
}

void updateBook()
{
    system("cls");
    bool found = false;
    int num;

    cout << "Enter Book Id: ";
    cin >> num;

    file.open("BookDetails.dat", ios::in | ios::out);

    while (file.read((char *)&b, sizeof(Books)) && found == false)
    {
        if (b.getBookId() == num)
        {
            cout << "\n";
            b.displayBook();
            cout << "\t\t\t\t\t\tENTER NEW DETAILS\n\n";
            b.createBook();
            int pos = -1 * sizeof(Books);
            file.seekp(pos, ios::cur);
            file.write((char *)&b, sizeof(Books));
            cout << "\t\t\t\t\t\tRECORD UPDATED SUCCESSFULLY\n\n";
            found = true;
        }
    }
    file.close();

    if (found == false)
    {
        cout << "\t\t\t\t\t\tRECORD NOT FOUND!!\n\n";
    }
    doTaskOnceAgain("\t\t\t\t\t\tDO YOU WANT TO UPDATE ANOTHER RECORD?(Y/N):", updateBook);
}

void displayBooks()
{
    system("cls");
    file.open("BookDetails.dat", ios::in);
    cout << setw(78) << "**************************\n";
    cout << cntr << "         BOOK RECORDS\n";
    cout << setw(78) << "**************************\n";
    cout << "\n";
    cout << "\t\t\t\t-------------------------------------------------------------\n";
    cout << setw(45) << "Book Id" << setw(20) << "Book Name" << setw(20) << "Authour Name\n";
    cout << "\t\t\t\t-------------------------------------------------------------\n";
    while (file.read((char *)&b, sizeof(Books)))
    {
        b.showBook();
        cout << "\t\t\t\t-------------------------------------------------------------\n";
    }
    cout << "\n\n";
    file.close();
}

//*****************************************************************************************************************
//                                        STUDENT MANAGEMENT FUNCTIONS
//*****************************************************************************************************************

void addStudent()
{
    system("cls");
    stu.open("StudentDetails.dat", ios::out | ios::app);
    st.createStudent();
    stu.write((char *)&st, sizeof(Student));
    stu.close();
    cout << "\n\n"
         << "\t\t\t\t\t\tSTUDENT RECORD ADDED SUCCESSFULLY\n";
    doTaskOnceAgain("\t\t\t\t\t\tDO YOU WANT TO ADD ANOTHER RECORD?(Y/N): ", addStudent);
}

void deleteStudent()
{
    system("cls");
    int num;
    cout << "Enter Student Id: ";
    cin >> num;
    stu.open("StudentDetails.dat", ios::in | ios::out);
    fstream file1;
    file1.open("temp.dat", ios::out);
    stu.seekg(0, ios::beg);
    while (stu.read((char *)&st, sizeof(Student)))
    {
        if (st.getUnivRoll() == num)
        {
            st.displayStudent();
        }
        if (st.getUnivRoll() != num)
        {
            file1.write((char *)&st, sizeof(Student));
        }
    }
    file1.close();
    stu.close();

    remove("StudentDetails.dat");
    rename("temp.dat", "StudentDetails.dat");

    cout << "\t\t\t\t\t\tRECORD DELETED SUCCESSFULLY\n";
    doTaskOnceAgain("\t\t\t\t\t\tDO YOU WANT TO DELETE ANOTHER RECORD?(Y/N): ", deleteStudent);
}

void updateStudent()
{
    system("cls");
    bool found = false;
    int num;
    cout << "Enter Student Id: ";
    cin >> num;

    stu.open("StudentDetails.dat", ios::in | ios::out);

    while (stu.read((char *)&st, sizeof(Student)) && found == false)
    {
        if (st.getUnivRoll() == num)
        {
            cout << "\n";
            st.displayStudent();
            cout << "\n";
            cout << "\t\t\t\t\t\tENTER NEW DETAILS\n\n\n";
            st.createStudent();
            int pos = -1 * sizeof(Student);
            stu.seekp(pos, ios::cur);
            stu.write((char *)&st, sizeof(Student));
            cout << "\t\t\t\t\t\tRECORD UPDATED SUCCESSFULLY\n\n";
            found = true;
        }
    }
    stu.close();

    if (found == false)
    {
        cout << "\t\t\t\t\t\tRECORD NOT FOUND!!\n\n";
    }
    doTaskOnceAgain("\t\t\t\t\t\tDO YOU WANT TO UPDATE ANOTHER RECORD?(Y/N):", updateStudent);
}

void displayStudents()
{
    system("cls");
    stu.open("StudentDetails.dat", ios::in);
    cout << setw(78) << "**************************\n";
    cout << cntr << "\tSTUDENT RECORDS\n";
    cout << setw(78) << "**************************\n";
    cout << "\n";
    cout << "\t\t\t--------------------------------------------------------------------------------------------\n";
    cout << setw(38) << "Student Id" << setw(15) << "Name" << setw(20) << "Semester" << setw(15) << "Book Id" << setw(20) << "Issue Date"
         << "\n";
    cout << "\t\t\t--------------------------------------------------------------------------------------------\n";
    while (stu.read((char *)&st, sizeof(Student)))
    {
        st.showStudent();
        cout << "\t\t\t--------------------------------------------------------------------------------------------\n";
    }
    cout<<"\n\n";
    stu.close();
}

//*****************************************************************************************************************
//                                      FUNCTIONS TO ISSUE/RETURN BOOKS
//*****************************************************************************************************************

void issueBook()
{
    system("cls");
    int num, bNum;
    bool found = false, bFound = false;
    cout << "\t\t\t\t\t\tISSUE BOOK\n";
    cout << "Enter Student Id: ";
    cin >> num;
    file.open("BookDetails.dat", ios::in | ios::out);
    stu.open("StudentDetails.dat", ios::in | ios::out);

    while (stu.read((char *)&st, sizeof(Student)) && found == false)
    {
        if (st.getUnivRoll() == num)
        {
            found = true;
            st.displayStudent();
            if (st.getBooksIssued() == 0)
            {
                cout << "Enter Book Id: ";
                cin >> bNum;
                while (file.read((char *)&b, sizeof(Books)) && bFound == false)
                {
                    if (b.getBookId() == bNum)
                    {
                        b.displayBook();
                        bFound = true;
                        st.addBooks();
                        st.setBookid(bNum);
                        int pos = -1 * sizeof(st);
                        stu.seekp(pos, ios::cur);
                        stu.write((char *)&st, sizeof(Student));
                        cout << "\t\t\t\t\t\tBOOK ISSUED\n\n\n";
                    }
                }
                if (bFound == false)
                {
                    cout << "\t\t\t\t\t\tBOOK RECORD NOT FOUND\n";
                }
            }
            else
            {
                cout << "\t\t\t\t\t\tYOU HAVE NOT RETUREND THE PREVIOUS BOOK\n";
            }
        }
    }
    if (found == false)
    {
        cout << "\t\t\t\t\t\tSTUDENT RECORD NOT FOUND\n";
    }

    file.close();
    stu.close();
}

bool checkReturn()
{
    time_t now = time(0);
    tm *ltm = localtime(&now);

    int month = st.getCurrMonth();
    int year = st.getCurrYear();

    int sysMonth = 1 + ltm->tm_mon;
    int sysYear = 1900 + ltm->tm_year;

    if (sysMonth >= month + 1 || sysYear >= year + 1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

void collectFine()
{
    int amount = 0, remAmount = 500;
    cout << "\t\t\t\t\t\t*******************************\n";
    cout << "\t\t\t\t\t\t\tFINE COLLECTION   \n";
    cout << "\t\t\t\t\t\t*******************************\n";
    do
    {
        cout << "Amount to deposite: " << remAmount << "\n";
        cout << "Deposite Amount: ";
        cin >> amount;
        cout << "\n";
        remAmount = remAmount - amount;
        if (remAmount == 0)
        {
            cout << "\t\t\t\t\t\tFINE DEPOSITED SUCCESSFULLY\n";
        }
        else if (remAmount > 0)
        {
            cout << "\nRemaning Amount: " << remAmount << "\n";
            cout << "Please deposite the remaining amount\n";
        }
    } while (remAmount != 0);
}

void returnBook()
{
    system("cls");
    int fine, bNum, num;
    bool found = false, bFound = false;
    cout << cntr << "RETURN BOOK\n";
    cout << "Enter Student Id: ";
    cin >> num;
    file.open("BookDetails.dat", ios::in | ios::out);
    stu.open("StudentDetails.dat", ios::in | ios::out);
    while (stu.read((char *)&st, sizeof(Student)) && found == false)
    {
        if (st.getUnivRoll() == num)
        {
            found = true;
            if (st.getBooksIssued() == 1)
            {
                while (file.read((char *)&b, sizeof(Books)) && bFound == false)
                {
                    if (st.getStudentBooks() == b.getBookId())
                    {
                        b.displayBook();
                        bFound = true;
                        if (checkReturn())
                        {

                            cout << "\t\t\t\t\t\tYOU ARE RETURNING THE BOOK AFTER THE DUE DATE\n";
                            cout << "\t\t\t\t\t\tFINE: RS. 500\n\n";
                            cout << "\t\t\t\t\tPLEASE DEPOSITE THE AMOUNT AT THE FRONT DESK BEFORE"
                                 << "RETURNING THE BOOK\n\n";
                            collectFine();
                            st.resetBooks();
                            st.resetDate();
                            int pos = -1 * sizeof(st);
                            stu.seekp(pos, ios::cur);
                            stu.write((char *)&st, sizeof(Student));
                            cout << "\n\t\t\t\t\t\t\tBOOK RETURNED\n\n";
                        }
                        else
                        {
                            st.resetBooks();
                            st.resetDate();
                            int pos = -1 * sizeof(st);
                            stu.seekp(pos, ios::cur);
                            stu.write((char *)&st, sizeof(Student));
                            cout << "\t\t\t\t\t\tBOOK RETURNED\n\n";
                        }
                    }
                }
                if (bFound == false)
                {
                    cout << "\t\t\t\t\t\tBOOK RECORD NOT FOUND\n";
                }
            }
            else
            {
                cout << "\t\t\t\t\t\tNO ISSUED BOOKS FOUND\n";
                cout << "\t\t\t\t\t\tPLEASE CHECK AGAIN\n";
            }
        }
    }
    if (found == false)
    {
        cout << "\t\t\t\t\t\tSTUDENT RECORD NOT FOUND\n";
    }
    file.close();
    stu.close();
}
//*****************************************************************************************************************
//                                        PASSWORD MANAGEMENT FUNCTIONS
//*****************************************************************************************************************

void adminPass()
{
    system("cls");
    string defaultPass = "admin", inputPass;
    ifstream inf("PASSWORD.txt");
    inf >> defaultPass;
    inf.close();
    cout << "\t\t\t\t\tENTER PASSWORD TO ACCESS ADMIN MENU\n\n";
    cout << "Password: ";
    cin >> inputPass;
    if (inputPass == defaultPass)
    {
        system("cls");
        adminMenu();
    }
    else
    {
        cout << "\t\t\t\t\tWRONG PASSWORD\n";
        cout << "\t\t\t\t\tRETURNING TO MAIN MENU\n\n";
        return;
    }
}

void changePass()
{
    system("cls");
    string oldPass, newPass, defaultPass;
    cout << "Current Password: ";
    cin >> oldPass;
    ifstream inf;
    inf.open("PASSWORD.txt", fstream::out | fstream::in);
    getline(inf, defaultPass);
    if (oldPass == defaultPass)
    {
        cout << "\n\n\t\t\t\tNOTE:- Password should not include spaces\n\n";
        cout << "New Pass: ";
        cin >> newPass;
        if (newPass == oldPass)
        {
            cout << "\t\t\t\t\tNEW PASSWORD CANNOT BE SAME AS OLD PASSWORD\n\n";
            cout << "\t\t\t\t\tRETURNING BACK TO ADMIN MENU\n\n";
            return;
        }
        ofstream temp("temp.txt");
        temp << newPass;
        temp.close();
        inf.close();
        remove("PASSWORD.txt");
        rename("temp.txt", "PASSWORD.txt");
        cout << "\t\t\t\t\tPASSWORD CHANGED SUCCESSFULLY\n\n";
        return;
    }
    else
    {
        cout << "\t\t\t\t\tWRONG PASSWORD\n\n";
        doTaskOnceAgain("\t\t\t\t\tTRY AGAIN?(Y/N):", changePass);
    }
}

//*****************************************************************************************************************
//                              FUNCTION TO DISPLAY BASIC DETAILS ABOUT THE DEVLOPER
//*****************************************************************************************************************

void intro()
{
    system("cls");
    cout << "\t\t\t\t---------------------------------------------------------\n";
    cout << "\t\t\t\t| CREATED BY : Siri Lalitha Adapa\t\t\t        |\n";
    cout << "\t\t\t\t| COURSE : BACHELOR OF TECHNOLOGY\t\t\t|\n";
    cout << "\t\t\t\t| BRANCH : COMPUTER SCIENCE AND ENGINEERING\t\t|\n";
    cout << "\t\t\t\t| UNIVERSITY : Vasireddy Venkatadhri Institute of Technology\t|\n";
    cout << "\t\t\t\t|\t       Nambur\t\t\t\t\t|\n";
    cout << "\t\t\t\t---------------------------------------------------------\n\n\n";
}

//*****************************************************************************************************************
//                                              MENU FUNCTIONS
//*****************************************************************************************************************

void studentsMenu()
{
    system("cls");
    int option;
    do
    {
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t\tSTUDENT MENU\n";
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t1. Add Student\n"
             << "\t\t\t\t\t2. Update Student\n"
             << "\t\t\t\t\t3. Delete Student\n"
             << "\t\t\t\t\t4. Display Student\n"
             << "\t\t\t\t\t5. Back to Admin Menu\n"
             << "\t\t\t\t\t0. Exit\n";

        cin >> option;

        switch (option)
        {

        case 0:
            intro();
            exit(0);
            break;
        case 1:
            addStudent();
            break;
        case 2:
            updateStudent();
            break;
        case 3:
            deleteStudent();
            break;
        case 4:
            displayStudents();
            break;
        case 5:
            system("cls");
            break;

        default:
            studentsMenu();
            break;
        }
    } while (option != 5);
}

void bookMenu()
{
    system("cls");
    int option;
    do
    {
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t\tBOOK MENU\n";
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t1. Add Book\n"
             << "\t\t\t\t\t2. Update Book\n"
             << "\t\t\t\t\t3. Delete Book\n"
             << "\t\t\t\t\t4. Display Books\n"
             << "\t\t\t\t\t5. Back to Admin Menu\n"
             << "\t\t\t\t\t0. Exit\n";

        cin >> option;

        switch (option)
        {
        case 0:
            intro();
            exit(0);
            break;

        case 1:
            addBook();
            break;
        case 2:
            updateBook();
            break;
        case 3:
            deleteBook();
            break;
        case 4:
            displayBooks();
            break;
        case 5:
            system("cls");
            break;

        default:
            bookMenu();
            break;
        }
    } while (option != 5);
}
void adminMenu()
{
    system("cls");
    int option;
    do
    {
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t\tADMIN MENU\n";
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t1. Books\n"
             << "\t\t\t\t\t2. Student\n"
             << "\t\t\t\t\t3. Change Password\n"
             << "\t\t\t\t\t4. Back To Main Menu\n"
             << "\t\t\t\t\t0. Exit\n\n\n";

        cin >> option;

        switch (option)
        {
        case 0:
            intro();
            exit(0);
            break;
        case 1:
            bookMenu();
            break;
        case 2:
            studentsMenu();
            break;
        case 3:
            changePass();
            break;
        case 4:
            system("cls");
            break;
        default:
            system("cls");
            adminMenu();
        }
    } while (option != 4);
}

void studentMenu()
{
    system("cls");
    int option;
    do
    {
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t\tSTUDENT MENU\n";
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t1. Issue Book\n"
             << "\t\t\t\t\t2. Return Book\n"
             << "\t\t\t\t\t3. Back To Main Menu\n\t\t\t\t\t0. Exit\n\n\n";

        cin >> option;

        switch (option)
        {
        case 0:
            system("cls");
            intro();
            exit(0);
            break;

        case 1:
            issueBook();
            break;
        case 2:
            returnBook();
            break;
        case 3:
            mainMenu();
            break;
        default:
            system("cls");
            studentMenu();
        }
    } while (option != 0);
}

void mainMenu()
{
    system("cls");
    cout << "\t\t\t\t----------------------------------------------\n";
    cout << "\t\t\t\t| \t LIBRARY MANAGEMENT PROJECT\t     |\n";
    cout << "\t\t\t\t----------------------------------------------\n\n\n";
    int choice;

    do
    {

        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t\tMAIN MENU\n";
        cout << "\t\t\t\t\t**************************\n";
        cout << "\t\t\t\t\t1. Admin\n\t\t\t\t\t2. Student\n\t\t\t\t\t0. Exit\n\n";
        cin >> choice;
        switch (choice)
        {
        case 0:
            intro();
            exit(0);
            break;

        case 1:
            adminPass();
            break;

        case 2:
            studentMenu();
            break;

        default:
            mainMenu();
            break;
        }
    } while (choice != 0);
}

//Driver Code  
int main()
{
    system("cls");
    system("color 01");
    mainMenu();
    return 0;
}
