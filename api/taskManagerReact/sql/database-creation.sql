Task
    text
    id
    creationDate

CREATE TABLE tasks(
    id UUID PRIMARY KEY NOT NULL,
    text VARCHAR(200),
    creationDate DATE DEFAULT CURRENT_DATE
)