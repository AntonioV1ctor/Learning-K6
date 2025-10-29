import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { check, fail } from "k6";

export let loadProcessDuration = new Trend('loadProcessDuration');
export let loadProcessSuccessRate = new Rate('loadProcessSuccessRate');
export let loadProcessFailureCount = new Counter('loadProcessFailureCount');
export let loadProcessReqs = new Counter('loadProcessReqs');


let JTWToken = 'your_jwt_token_here';


export default function () {
    let res = http.get('https://api.example.com.br/api/v1/all-users?', {
        headers: {'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+JTWToken},    
    });

    loadProcessDuration.add(res.timings.duration);
    loadProcessReqs.add(1);
    

    let isSuccess = res.status >= 200 && res.status < 300;
    loadProcessSuccessRate.add(isSuccess);
    if (!isSuccess) {
        loadProcessFailureCount.add(1);
    }
    
    let durationMsg = 'Falha na execução do cenário de teste - login user';
    
    if (!check(res, {
        'status code is 200 or 401': (r) => r.status === 200 || r.status === 401,
        'response time < 2000ms': (r) => r.timings.duration < 2000,
        'response received': (r) => r.status !== 0,
    })) {
        fail(durationMsg);
    }
    
    sleep(1);
}