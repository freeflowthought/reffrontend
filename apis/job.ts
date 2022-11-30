export const queryJobs = async () => {
  return await [
    {
      id: 1,
      description: "This is a job descriptionasasassssssssssnlilhasdohasdoiahdoiahdioahdoiahd",
      tags: ["java", "db", "test"],
      title: "Soft Engineer",
      location: 'USA'
    },
  ];
};


export const queryJobById = async (id: number) => {
    return await {
        id: 1,
        description: "This is a job descriptionasasassssssssssnlilhasdohasdoiahdoiahdioahdoiahd",
        tags: ["java", "db", "test"],
        title: "Soft Engineer",
        location: 'USA'
    };
}
