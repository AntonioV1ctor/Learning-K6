import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
import { check, fail } from "k6";

export let loginUserDuration = new Trend('loginUserDuration');
export let loginUserSuccessRate = new Rate('loginUserSuccessRate');
export let loginUserFailureCount = new Counter('loginUserFailureCount');
export let loginUserReqs = new Counter('loginUserReqs');


let data = { login: 'test@example.com', password: '123213' };


export default function () {
    let res = http.post('https://api.example.com.br/api/v1/login', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });

    loginUserDuration.add(res.timings.duration);
    loginUserReqs.add(1);
    

    let isSuccess = res.status >= 200 && res.status < 300;
    loginUserSuccessRate.add(isSuccess);
    if (!isSuccess) {
        loginUserFailureCount.add(1);
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