import string
import random

def generatePassword(num):
	password = ''	
	for n in range(num):
	    x = random.randint(0,94)
	    password += string.printable[x]	
	return password


if __name__ == '__main__':
        
    op = 0
    while(op!=2):

        print("1.- GENERATE PASSWORD ")

        print("2.- EXIT")        

        op = int(input("Input Option: "))

        if (op == 1):
	    # GENERATE
            _password = generatePassword(16)
            print(_password)
