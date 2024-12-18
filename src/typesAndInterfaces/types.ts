export type TypeToDo = {
    "userId": number,
    "id": number,
    "title": string,
    "description": string,
    "completed": boolean
}

export type TypeAddToDo = Omit<TypeToDo, 'id'>;