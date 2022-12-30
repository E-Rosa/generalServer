class ModelParser {
  generateDatesArray(dateString: string, repeat: number): Date[] {
    let datesArray: Date[] = [];
    let parsedDate = this.parseStringToDate(dateString);
    //add 7 days to date
    for (let i = 0; i < repeat * 4; i++) {
      datesArray.push(
        new Date(
          parsedDate.getFullYear(),
          parsedDate.getMonth(),
          parsedDate.getDate() + 7 * i
        )
      );
    }
    return datesArray;
  }

  parseStringToDate(frontEndDate: string): Date {
    let newArray: string[] = frontEndDate.split("-");
    let newDate: Date = new Date(
      parseInt(newArray[0]),
      parseInt(newArray[1]) - 1,
      parseInt(newArray[2])
    );
    return newDate;
  }

  parseDateToString(date: Date): string {
    let a = [];
    let dateString = date.toLocaleDateString();
    let dayMonthYear = dateString.split("/");
    a.push(dayMonthYear[2]);
    a.push(dayMonthYear[1]);
    a.push(dayMonthYear[0]);
    return a.join("-");
  }
}

export { ModelParser };
