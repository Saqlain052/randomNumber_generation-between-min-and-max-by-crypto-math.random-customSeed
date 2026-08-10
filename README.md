1- Math.random 

sb say pehlay hum nay function bnaya jiss mei user min and max dai ga 
phir uss k mei math.random say number generate krwaya jo 0 say 1 k bech hoga
phir uss ko multiply kia ( max - min +1) say jiss say value bahir nikli 0 or 1 say .
phir uss ka floor lia , and min say plus kr dia .
iss trha random number generate hogya 
agar 2 say divide kr k remainder zero ni aata to increment kr dein gay , or agar increment krnay say range say bahir jaye ga to 2 say minus kr dein gay
iss trha random number hamesha even hi generate hoga


2- crypto

sab say pehlay Uint32Array banaya jiss mein random 32-bit integer store hoga.
crypto.getRandomValues() say cryptographically secure random number generate kia.
% (max - min + 1) say random number ko required range mein convert kia aur min add kia.
agar number odd ho to +1 kia, aur range say bahar jaye to -2 kia.
iss tarah min aur max ke beech even random number mil gaya.

3- Custom Seed

sab say pehlay hum nay seed li jo random sequence ka starting point hai.
phir (seed * 9 + 11) % 100 say seed ko update kia aur pseudo-random value generate ki.
phir seed / 100 say value ko 0 aur 1 ke beech normalize kia.
phir Math.floor(random * (max - min + 1)) + min say usay min aur max ki range mein convert kia.
agar number odd ho to +1 kia, aur agar max say bahar chala jaye to -2 kia.
iss tarah same initial seed say same random sequence dobara generate ki ja sakti hai.

Math.random() -> achi randomness, lekin security low; general-purpose use ke liye.
Custom Seeded -> predictable aur reproducible; security low; testing ke liye prefered.
crypto.getRandomValues() -> high-quality randomness aur strong security; passwords, tokens aur security purposes ke liye.
