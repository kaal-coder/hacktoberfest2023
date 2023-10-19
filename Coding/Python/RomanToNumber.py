def romanToInt(s):
        x=0
        rtonum = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
        for i in range(len(s)-1):
            if(rtonum[s[i]]>=rtonum[s[i+1]]):
                x=x+rtonum[s[i]]
            elif(rtonum[s[i]]<rtonum[s[i+1]]):
                x=x-rtonum[s[i]]                
                
        else:
            x=x+rtonum[s[-1]]
        return x

str=input("Enter a valid Roman number  : ")
print(romanToInt(str))
