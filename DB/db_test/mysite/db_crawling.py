import json
import sqlite3
import requests
from bs4 import BeautifulSoup

# 크롤링
url = 'https://paullab.co.kr/bookservice/'
response = requests.get(url)
response.encoding = 'utf-8'
html = response.text

soup = BeautifulSoup(html, 'html.parser')

title = []
price = []
author = []
total = [title, price, author]
# 1: 제목, 2: 가격, 3: 저자
for i in range(1, 4):
    book_list = soup.select(f'.book_detail :nth-child({i})')
    for book in book_list:
        text = book.text
        if '가격' in text:
            text = text.split(': ')[1]
            if text == '무료':
                text = 0
            else:
                text = int(text.replace(',', '').replace('원', ''))
        elif '저자' in text:
            text = text.split(': ')[1].split(', ')
        total[i-1].append(text)
data = list(zip(total[0], total[1], total[2]))

# 데이터베이스 생성 및 저장
conn = sqlite3.connect('books.db')
cursor = conn.cursor()
cursor.execute(
    'CREATE TABLE books (id INTEGER, title TEXT, price INTEGER, author TEXT)')

for i in range(len(data)):
    cursor.execute(
        f'INSERT INTO books VALUES ({i+1}, "{data[i][0]}", "{data[i][1]}", "{data[i][2]}")')

conn.commit()
conn.close()

# 데이터베이스 읽기
conn = sqlite3.connect('books.db')
c = conn.cursor()
c.execute('SELECT * FROM books')

result = c.fetchall()
dicts = []
for row in result:
    d = {"id": row[0], "title": row[1], "price": row[2], "author": row[3]}
    dicts.append(d)

conn.close()

# json으로 출력
with open('output.json', 'w') as f:
    json.dump(dicts, f, indent=2, ensure_ascii=False)
