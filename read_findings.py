
try:
    with open(r'd:\recents\new\findings.txt', 'r', encoding='utf-16le') as f:
        print(f.read())
except Exception as e:
    print(e)
