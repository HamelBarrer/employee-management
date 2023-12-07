export interface UserRole {
  userRoleId: number;
  name: string;
  isActive: boolean;
}

export interface User {
  userId: number;
  username: string;
  lastname: string;
  userRole?: UserRole;
  userRoleId: number;
}

export interface Employee {
  employeeId?: number;
  user?: User;
  userId: number;
  version?: number;
}
