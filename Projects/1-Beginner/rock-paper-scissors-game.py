import random
user_wins = 0
comp_win = 0
while True:
    print('Welcome To The Rock Paper Scissors Game! Lets Start:')
    comp_sel = random.randint(1,3)
    if comp_sel == 1:
        comp_sel = 'R'
    elif comp_sel == 2:
        comp_sel = 'S'
    else:
        comp_sel = 'P'


    user_choice = input('Press R For Rock, S For Scissors And P for Paper: ').upper()
    if user_choice in ['R','S','P']:
        print('Rock... Paper... Scissors... SHOOT!')
        print(f'\t Your Selection is {user_choice} \n Computer Seletion Is {comp_sel}')
        if user_choice == 'R' and comp_sel == 'S':
            print('You Won!')
            user_wins += 1
        elif user_choice == 'R' and comp_sel == 'P':
            print('Computer Won!')
            comp_win += 1
        elif user_choice == 'P'and comp_sel =='S':
            print('Computer Won!')
            comp_win += 1
        elif user_choice == 'S' and comp_sel == 'R':
            print('Computer Won!')
            comp_win += 1
        elif user_choice == 'P' and comp_sel == 'R':
            print('You Won!')
            user_wins += 1
        elif user_choice == 'S' and comp_sel == 'P':
            print('You Won!')
            user_wins += 1
        else:
            print('Its a Draw!')
    
    print(f'Your Total Wins Till Now Is {user_wins} \n Computer Total Wins Till Now Is {comp_win}')

    again = input('Would You Like To Play Again? Y for Yes and N For No: ').upper()
    if again[0] == 'Y':
        continue
    if again[0] == 'N':
        break
    