import sqlite3

# 데이터베이스 연결 및 테이블 생성
conn = sqlite3.connect('skill_builder.db')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT,
        -- 추가 필드 추가 가능
    )
''')

conn.commit()
conn.close()
