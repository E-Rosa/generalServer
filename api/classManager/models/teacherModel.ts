class TeacherProfile {
  name: string;
  id: string;
  city: string;
  level: string;

  constructor(name: string, id: string, city: string, level: string) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.level = level;
  }
}

function createTeacherProfile(data: any): any {
  let a: object[] = [];
  if (data.rows[0] != undefined) {
    for (let i = 0; i < data.rows.length; i++) {
      let name: string = data.rows[i].teacher_name;
      let level: string = data.rows[i].teacher_level;
      let id: string = data.rows[i].teacher_id;
      let city: string = data.rows[i].teacher_city;
      let card: object = new TeacherProfile(name, id, city, level);
      a.push(card);
    }
    return a;
  } else {
    return null;
  }
}

export { createTeacherProfile, TeacherProfile };

//tsc --module commonjs ./api/models/teacherModel.ts
