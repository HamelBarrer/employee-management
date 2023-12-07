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
