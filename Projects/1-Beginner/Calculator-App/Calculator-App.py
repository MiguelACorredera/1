import ttkbootstrap as ttk
import tkinter as tk

class Main(ttk.Window):
    def __init__(self, title, dimensions):
        super().__init__(self, themename="darkly")
        self.title(title)
        self.geometry(dimensions)

    def __str__(self):
        return super().__str__()

class Calculator():
    def __init__(self, title, dimensions):
        self.main = Main(title, dimensions)
        # The calculator count with 20 buttons 1 big label at the top
        # The best way to place the buttons is ussing grid
        # It also require a main frame 
        # The frame is also the master for the buttons and the label
        self.buttonsSimbols=["A/C", "+/-", "  /  ", "<-", "7","8","9","x", "4","5","6","-", "1","2","3","+", "0", ".", "="]
        self.buttons = []
        self.word = ""
        self.res = 0
        self.CreateFrames()
        self.screen = ttk.Label(self.screenFrame, text="HOLA MUNDO", font=("Arial", 20, "bold"),justify="right")
        self.screen.pack(padx=10, pady=10, expand=True)
        self.Configure()
        self.GridButtons()

        self.main.mainloop()

    def CreateFrames(self):
        self.mainFrame = ttk.Frame(self.main, height=400, width=300)
        self.mainFrame.pack(padx=5, pady=5, fill="both", expand=True)
        self.screenFrame = ttk.Frame(self.mainFrame)
        self.screenFrame.pack(padx=0, pady=0, expand=True)
        self.buttonsFrame = ttk.Frame(self.mainFrame)
        self.buttonsFrame.pack(padx=0, pady=0, expand=True)

    def GridButtons(self):
        l= 0
        for j in range (6):
            for i in range (4):
                if l < len(self.buttonsSimbols):
                    self.buttons.append( ttk.Button(self.buttonsFrame, text= self.buttonsSimbols[l]))
                    self.buttons[l].grid(column=i, row=j,sticky="nsew", padx=5, pady=5)
                    self.buttons[l].bind("<Button-1>", self.ClickedButton)
                    l +=1

    def ClickedButton(self, event):
        if  event.widget['text'] == "=":
            self.ProcessText(event)
        else:
            self.word = self.word + event.widget['text']
            self.screen.config(text = self.word)

    def ProcessText(self, event):
        self.screen.config(text="")
        if self.word.find('+'):
            self.res = self.word.split('+')
            self.Operation("+", event)
        elif self.word.find('-'):
            self.res = self.word.split('-')
            self.Operation("-", event)
        elif self.word.find('/'):
            self.res = self.word.split('/')
            self.Operation("/", event)
        elif self.word.find('x'):
            self.res = self.word.split('x')       
            self.Operation("*", event)

    def Operation(self, simbol, event):
        print(self.res)
        self.word = str(eval(f"{int(self.res[0])} {simbol} {int(self.res[1])}"))
        print(type(self.word))
        self.screen.config(text = self.word)

    def Configure(self):
        for i in range(5):
            self.mainFrame.rowconfigure(i, weight=1, minsize=50)
        for i in range(4):
            self.mainFrame.columnconfigure(i, weight=1, minsize=50)

    def __str__(self):
        return super().__str__()


if __name__=="__main__":
    calc = Calculator("Calculator", "300x400")