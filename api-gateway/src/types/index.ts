export interface IRoutes {
  name: string;
  url: string;
  proxy: {
    target: string;
    changeOrigin: boolean;
    pathRewrite: any;
  };
}

export interface IService {
  service_name: string;
  service_path: string;
}
