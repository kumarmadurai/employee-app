export class Emp {
  id: number;
  name: string;
  email: string;
  type: string;
  description: string;

  constructor(
    name?: string,
    email?: string,
    type?: string,
    description?: string
  ) {
    this.name = name || '';
    this.email = email || '';
    this.type = type || '';
    this.description = description || '';
  }
}
