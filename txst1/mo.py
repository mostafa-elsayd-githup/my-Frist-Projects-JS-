seconds= int(input("please type the naumber of seconds:\n"))
hours=seconds//3600
minutes=(seconds%3600)//60
seconds_mo= seconds %60
print(f"the duration is: {hours} hours {minutes} minutes {seconds_mo} secondes")