CREATE TABLE quests(
    questId UUID PRIMARY KEY NOT NULL,
    questTitle  VARCHAR(500), 
    questDescription VARCHAR(3000),
    questImgURL VARCHAR(300)[]


)