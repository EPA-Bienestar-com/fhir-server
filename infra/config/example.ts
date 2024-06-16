import { EnvConfig } from "../lib/env-config";
import { EnvType } from "../lib/env-type";

export const config: EnvConfig = {
  environmentType: EnvType.production,
  region: "us-east-1",
  vpcId: "my_vpcId",
  zone: {
    id: "xxxx",
    name: "xxx.epabienestar.net",
  },
  domain: "epabienestar.net",
  subdomain: "fhir",
  dbName: "my_db",
  dbUsername: "my_db_user",
};
export default config;
