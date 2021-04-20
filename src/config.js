import { config } from "dotenv";
config();

export default {
  database: {
    URI: process.env.MONGODB_URI || "mongodb://gg4gt1-14627:Jmcmp4HYEFFkwoXCTs1cj52DjDVkml@db-gg4gt1-14627.nodechef.com:5385/gg4gt1",
  },
  port: process.env.PORT || 3000,
};
