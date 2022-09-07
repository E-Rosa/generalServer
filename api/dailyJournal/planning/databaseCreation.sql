CREATE TABLE notes(
    note_id UUID PRIMARY KEY,
    note_title VARCHAR(500),
    note_text TEXT,
    note_creationDate DATE DEFAULT CURRENT_DATE,
    note_tags VARCHAR(200)
)