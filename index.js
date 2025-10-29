
import loginUser from "./scenario/Login-User.js";
import loadProcess from "./scenario/Load-process.js";
import { group, sleep } from 'k6';
import { htmlReport } from "./bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export default function() {
  group('Endpoint login user - API k6', () => {
    loginUser();
  });

  group('Endpoint load process - API k6', () => {
    loadProcess();
  });
  
}