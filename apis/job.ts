import { Job } from "store/service/job";

export const queryJobs = async () => {
  return await [
    {
      id: 1,
      description: "This is a job descriptionasasassssssssssnlilhasdohasdoiahdoiahdioahdoiahd",
      tags: ["java", "db", "test"],
      title: "Soft Engineer",
      location: 'USA',
      salary: '14-25k'
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


export const queryJobsByConditions = async (job: Partial<Job>) => {
    return await [
        {
            id: 1,
            description: "This is a job descriptionasasassssssssssnlilhasdohasdoiahdoiahdioahdoiahd",
            tags: ["java", "db", "test"],
            title: "Soft Engineer",
            location: 'USA'
        },
    ];
}


export const applyJob = async (id: number) => {
    return await {
        id: 1,
        description: "This is a job descriptionasasassssssssssnlilhasdohasdoiahdoiahdioahdoiahd",
        tags: ["java", "db", "test"],
        title: "Soft Engineer",
        location: 'USA'
    };
}


export const getJobsByUser = async (userId: number): Promise< Partial<Job> []> => {
    return [
        {
            id: 1,
            description: "This is a job descriptionasasassssssssssnlilhasdohasdoiahdoiahdioahdoiahd",
            tags: ["java", "db", "test"],
            title: "Soft Engineer",
            location: 'USA',
            status: 'completed', 
            type: 'remote', 
            company: 'asasas', 
            salary: '20-22k'
        },
    ];
}