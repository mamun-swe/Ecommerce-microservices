declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        name: string;
        role: string;
      };
    }
  }
}

export type JwtPayloadType = {
  id: any;
  name: string;
  role: string;
};
