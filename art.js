(() => {
  const R = (c, x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
  const stars = c => { for (let i = 0; i < 30; i++) R(c, (i*53)%160, (i*29)%50, 1, 1, i%3 ? '#34407a' : '#9fb0ff'); };
  const art = {
    heli(c){ R(c,0,0,160,22,'#0055FF'); R(c,0,22,160,22,'#00AAFF'); R(c,0,44,160,46,'#55AAFF');
      R(c,96,12,22,6,'#FFFFFF'); R(c,100,9,12,4,'#FFFFFF'); R(c,98,17,18,2,'#AAFFFF'); R(c,18,20,14,4,'#FFFFFF'); R(c,21,18,7,3,'#FFFFFF');
      for(let x=0;x<160;x++){ const t=Math.round(58-Math.abs(((x+10)%44)-22)*0.9); R(c,x,t,1,90-t,x%44<22?'#5555FF':'#5555AA'); if(t<44) R(c,x,t,1,3,'#FFFFFF'); }
      for(let x=0;x<160;x++){ const t=Math.round(66+Math.sin(x/12)*3); R(c,x,t,1,90-t,'#00AA55'); R(c,x,t,1,1,'#55FFAA'); }
      for(let x=0;x<160;x++){ const t=Math.round(74+Math.sin(x/18+1)*3); R(c,x,t,1,90-t,'#AA5500'); R(c,x,t,1,1,'#005500'); R(c,x,t+1,1,2,'#55FF55'); R(c,x,t+3,1,1,x%3?'#00AA00':'#55FF55'); }
      [[20,84],[60,82],[100,85],[140,83]].forEach(([x,y])=>{R(c,x,y,3,1,'#FFAA55');R(c,x,y+1,3,1,'#550000');});
      for(let x=112;x<138;x++) R(c,x,73,1,2,((x-112)>>1)%2?'#000000':'#FFFF00'); R(c,112,66,1,7,'#AAAAAA'); R(c,113,66,4,2,'#FF0000');
      R(c,120,65,2,2,'#550000'); R(c,119,67,4,3,'#FF0000'); R(c,120,70,1,3,'#0000AA'); R(c,122,70,1,3,'#0000AA');
      R(c,127,65,2,2,'#550000'); R(c,126,67,4,3,'#00AAFF'); R(c,127,70,1,3,'#0000AA'); R(c,129,70,1,3,'#0000AA');
      R(c,49,29,24,11,'#000000'); R(c,50,30,22,9,'#FFFFFF'); R(c,50,35,22,2,'#FF0000'); R(c,64,30,8,5,'#000000'); R(c,65,31,6,3,'#0055FF'); R(c,66,31,3,1,'#AAFFFF');
      R(c,28,32,22,4,'#000000'); R(c,29,33,21,2,'#FFFFFF'); R(c,26,28,4,9,'#000000'); R(c,27,29,2,7,'#FFFFFF');
      R(c,38,26,46,2,'#000000'); R(c,44,26,8,1,'#AAAAAA'); R(c,70,26,8,1,'#AAAAAA'); R(c,60,27,2,3,'#000000');
      R(c,54,40,2,3,'#000000'); R(c,66,40,2,3,'#000000'); R(c,50,43,22,2,'#AAAAAA'); },
    citadelle(c){ R(c,0,0,160,90,'#0e4a24'); for(let i=0;i<120;i++) R(c,(i*37)%160,(i*23)%90,1,1,'#16602e');
      R(c,68,33,24,24,'#5f574f'); R(c,70,35,20,20,'#c2c3c7'); R(c,76,41,8,8,'#7e2553'); R(c,79,38,2,3,'#ff004d');
      R(c,52,37,14,14,'#ab5236'); R(c,94,37,14,14,'#ffa300');
      R(c,72,20,10,10,'#29adff'); R(c,72,60,10,10,'#c2c3c7');
      [[10,12],[24,78],[140,20],[150,70],[6,50],[130,84]].forEach(([x,y])=>{R(c,x,y,4,4,'#ff004d');R(c,x+1,y-2,2,2,'#ffccaa');});
      R(c,120,44,7,7,'#00e436'); },
    cuisine(c){ for(let y=0;y<90;y+=10) for(let x=0;x<160;x+=10) R(c,x,y,10,10,((x+y)/10)%2?'#d9e0e3':'#c3ccd1');
      R(c,0,30,4,30,'#2f9e6b'); R(c,156,30,4,30,'#e0533a');
      [[30,20],[30,30],[30,40],[60,50],[60,60],[60,40],[90,20],[90,30],[90,40],[120,50],[120,60]].forEach(([x,y])=>{R(c,x,y,10,10,'#1f2d36');R(c,x+3,y+3,4,4,'#2f8fd6');});
      [[12,44],[46,34],[76,72],[104,26],[140,40]].forEach(([x,y],i)=>R(c,x,y,4,3,i%2?'#3a2418':'#8b8f93')); },
    front(c){ R(c,0,0,160,90,'#55aa55'); for(let i=0;i<140;i++) R(c,(i*37)%160,(i*23)%90,1,1,i%2?'#00aa00':'#aaff55');
      R(c,96,0,64,90,'#888877'); for(let i=0;i<60;i++) R(c,96+(i*29)%64,(i*17)%90,1,1,'#555544');
      [[8,10],[20,18],[10,30],[26,6]].forEach(([x,y])=>{R(c,x,y,8,8,'#005500');R(c,x+1,y+1,6,5,'#00aa00');R(c,x+3,y+8,2,3,'#aa5500');});
      R(c,12,52,20,14,'#aa5500'); R(c,10,48,24,5,'#005500'); R(c,20,58,4,8,'#550000');
      R(c,124,40,24,20,'#555555'); R(c,128,30,4,10,'#333333'); R(c,138,26,4,14,'#333333'); R(c,127,24,6,5,'#aaaaaa'); R(c,137,20,6,5,'#aaaaaa');
      R(c,126,46,6,4,'#ffaa00'); R(c,138,46,6,4,'#ffaa00');
      [[50,40],[56,48],[62,38]].forEach(([x,y])=>{R(c,x,y,4,6,'#00aa00');R(c,x+1,y-2,2,2,'#ffaa55');});
      [[100,44],[106,52]].forEach(([x,y])=>{R(c,x,y,4,6,'#555555');R(c,x+1,y-2,2,2,'#ffaa55');});
      R(c,78,30,2,16,'#ffffff'); R(c,80,30,9,6,'#ffff00'); R(c,72,46,14,3,'#aaaaaa'); },
    brique(c){ R(c,0,0,160,90,'#000'); const col=['#ff4f6d','#ff8a3d','#ffd23f','#38e07b','#4fd7ff'];
      for(let r=0;r<5;r++) for(let k=0;k<10;k++){ if(r===2&&k===6) continue; R(c,6+k*15,8+r*7,13,5,col[r]); R(c,6+k*15,8+r*7,13,1,'rgba(255,255,255,.35)'); }
      R(c,96,60,4,4,'#ffd23f'); R(c,66,80,30,4,'#eef2ff'); R(c,66,80,3,4,'#4fd7ff'); R(c,93,80,3,4,'#4fd7ff');
      c.fillStyle='rgba(255,210,63,.35)'; for(let i=1;i<5;i++) c.fillRect(96-i*5,60+i*4,2,2); },
    forain(c){ R(c,0,0,160,90,'#140f22'); stars(c);
      c.strokeStyle='#f2c14e'; c.lineWidth=2; c.beginPath(); c.arc(80,34,24,0,6.3); c.stroke();
      for(let i=0;i<8;i++){ const a=i*Math.PI/4; R(c,80+Math.cos(a)*24-2,34+Math.sin(a)*24-2,4,4,['#d94352','#4fb3ff','#f2c14e','#8be0a4'][i%4]); c.fillStyle='#d8d0e8'; c.fillRect(80+Math.cos(a)*12,34+Math.sin(a)*12,1,1); }
      R(c,79,33,3,3,'#d8d0e8'); R(c,70,58,4,10,'#d8d0e8'); R(c,86,58,4,10,'#d8d0e8');
      R(c,0,68,160,22,'#2c2440'); for(let x=0;x<160;x+=10) R(c,x,68,1,22,'#231c35');
      R(c,6,56,22,12,'#5b2b4e'); for(let x=6;x<28;x+=4) R(c,x,53,2,3,'#d94352'), R(c,x+2,53,2,3,'#f3e6cc');
      R(c,132,56,22,12,'#2f3b66'); for(let x=132;x<154;x+=4) R(c,x,53,2,3,'#d94352'), R(c,x+2,53,2,3,'#f3e6cc');
      R(c,36,66,10,9,'#9a6440'); R(c,38,60,7,7,'#9a6440'); R(c,37,58,2,2,'#9a6440'); R(c,43,58,2,2,'#9a6440'); R(c,40,59,3,2,'#ff4d5e'); R(c,36,70,10,2,'#ff4d5e');
      R(c,116,66,8,9,'#4fb3ff'); R(c,117,61,6,5,'#eec39a'); R(c,116,59,8,2,'#2a2030'); R(c,108,66,9,2,'#7a4b2a');
      R(c,98,66,3,2,'#fff0cf'); R(c,92,66,2,1,'rgba(255,240,207,.5)');
      R(c,60,74,9,6,'#f49ac8'); R(c,62,71,6,4,'#f49ac8'); R(c,96,76,8,5,'#f49ac8'); },
    lievre(c){ const g=c.createLinearGradient(0,0,0,90); g.addColorStop(0,'#5b8cff'); g.addColorStop(1,'#b46bff'); c.fillStyle=g; c.fillRect(0,0,160,90);
      const P=[[20,45],[50,20],[50,45],[50,70],[80,20],[80,45],[80,70],[110,20],[110,45],[110,70],[140,45]];
      const L=[[0,1],[0,2],[0,3],[1,4],[2,5],[3,6],[4,7],[5,8],[6,9],[7,10],[8,10],[9,10],[1,2],[2,3],[4,5],[5,6],[7,8],[8,9],[0,1],[2,4],[2,6],[4,8],[6,8],[1,5],[3,5],[5,7],[5,9]];
      c.strokeStyle='#ff6fae'; c.lineWidth=2; L.forEach(([a,b])=>{c.beginPath();c.moveTo(P[a][0],P[a][1]);c.lineTo(P[b][0],P[b][1]);c.stroke();});
      P.forEach(([x,y])=>{c.fillStyle='#3a1f6e';c.beginPath();c.arc(x,y,4,0,6.3);c.fill();});
      const piece=(i,col,dark)=>{const[x,y]=P[i];c.fillStyle=dark;c.beginPath();c.arc(x,y+1,7,0,6.3);c.fill();c.fillStyle=col;c.beginPath();c.arc(x,y,7,0,6.3);c.fill();c.fillStyle='rgba(255,255,255,.55)';c.beginPath();c.arc(x-2,y-3,2.5,0,6.3);c.fill();};
      piece(0,'#ff4f8b','#c42263'); piece(1,'#ff4f8b','#c42263'); piece(3,'#ff4f8b','#c42263'); piece(8,'#4fe08a','#1fa85a');
      R(c,107,30,2,6,'#ffffff'); R(c,111,30,2,6,'#ffffff'); },
    dracula(c){ const g=c.createLinearGradient(0,0,0,90); g.addColorStop(0,'#3a0a18'); g.addColorStop(1,'#0c0910'); c.fillStyle=g; c.fillRect(0,0,160,90);
      c.fillStyle='#f3ecd0'; c.beginPath(); c.arc(124,20,11,0,6.3); c.fill();
      R(c,52,22,56,40,'#120a12'); R(c,46,14,10,48,'#120a12'); R(c,104,14,10,48,'#120a12'); R(c,74,6,12,56,'#120a12');
      [[46,10],[104,10],[74,2]].forEach(([x,y])=>{c.fillStyle='#120a12';c.beginPath();c.moveTo(x-2,y+4);c.lineTo(x+5,y-6);c.lineTo(x+12,y+4);c.fill();});
      [[60,30],[90,34],[78,22],[66,44]].forEach(([x,y])=>R(c,x,y,3,4,'#ffb860'));
      c.fillStyle='#3a3540'; c.beginPath(); c.moveTo(66,90); c.lineTo(76,60); c.lineTo(84,60); c.lineTo(94,90); c.fill();
      R(c,79,66,3,1,'#f2c14e'); R(c,77,71,4,2,'#f2c14e'); R(c,76,77,5,2,'#f2c14e');
      R(c,77,80,6,7,'#6b4a2b'); R(c,78,76,4,4,'#e0b48a'); R(c,76,75,8,2,'#3a2a1a'); R(c,78,87,2,3,'#2b2420'); R(c,81,87,2,3,'#2b2420');
      [[30,40],[36,36],[128,44],[134,40]].forEach(([x,y])=>{R(c,x,y,2,2,'#1a1018');R(c,x-3,y,3,1,'#1a1018');R(c,x+2,y,3,1,'#1a1018');}); },
    logi(c){ R(c,0,0,160,90,'#0c0a1d');
      const ox=40,oy=12,cs=9,n=4;
      for(let b=0;b<2;b++) for(let r=0;r<n;r++) for(let k=0;k<n;k++){ const x=ox+b*(n*cs+3)+k*cs, y=oy+r*cs; R(c,x,y,cs-1,cs-1,'#16133a'); }
      for(let r=0;r<n;r++) for(let k=0;k<n;k++){ const x=ox+k*cs, y=oy+n*cs+3+r*cs; R(c,x,y,cs-1,cs-1,'#16133a'); }
      const O=(x,y)=>{R(c,x+2,y+2,4,4,'#33f0c8');}, X=(x,y)=>{for(let i=0;i<5;i++){R(c,x+1+i,y+1+i,1,1,'#ff6b8a');R(c,x+5-i,y+1+i,1,1,'#ff6b8a');}};
      const g=(b,r,k)=>[ox+b*(n*cs+3)+k*cs, oy+r*cs];
      O(...g(0,0,2)); [0,1,3].forEach(k=>X(...g(0,0,k))); [1,2,3].forEach(r=>X(...g(0,r,2)));
      O(...g(1,1,0)); X(...g(1,0,0)); X(...g(1,1,1)); X(...g(1,1,3)); O(...g(0,2,1)); X(...g(0,2,0));
      O(ox+3*cs, oy+n*cs+3+cs); X(ox+cs, oy+n*cs+3);
      R(c,6,12,26,4,'#8b7cff'); R(c,6,21,22,4,'#8b7cff'); R(c,6,30,26,4,'#8b7cff'); R(c,6,39,18,4,'#8b7cff');
      for(let i=0;i<4;i++) R(c,124,14+i*12,30,3,i===1?'#5a5390':'#9c97c9');
      R(c,124,15+12,30,1,'#ff4fa3');
      R(c,132,70,14,14,'#ffd23f'); R(c,134,72,10,10,'#0c0a1d'); R(c,136,74,6,2,'#ffd23f'); R(c,140,76,2,3,'#ffd23f'); R(c,138,79,2,2,'#ffd23f'); },
    frigo(c){ R(c,0,0,160,90,'#bfe3f2'); R(c,30,4,100,84,'#f7fbfd'); R(c,36,10,88,72,'#d8eef7');
      for(let r=0;r<3;r++){ R(c,36,32+r*24,88,3,'#9fc6d8'); }
      const it=[['#3fbf6a','#3fbf6a','#3fbf6a'],['#ff5a3c','#ffc23a','#ff8a2a'],['#7a4ab0','#3fbf6a','#ff5a3c']];
      it.forEach((row,r)=>row.forEach((col,k)=>{ const x=42+k*14+(r%2)*40, y=20+r*24; R(c,x,y,10,11,col); R(c,x+3,y-3,4,3,'#2a8a3a'); R(c,x+2,y+2,3,3,'rgba(255,255,255,.5)'); }));
      R(c,92,20,10,11,'#ffc23a'); R(c,106,20,10,11,'#ff5a3c'); R(c,92,44,10,11,'#3fbf6a');
      R(c,126,30,3,20,'#c9dbe4'); c.fillStyle='rgba(255,255,255,.9)'; c.fillRect(46,16,24,2); },
  };
  document.querySelectorAll('canvas[data-art]').forEach(cv => { const c = cv.getContext('2d'); c.imageSmoothingEnabled = false; const f = art[cv.dataset.art]; if (f) f(c); });
})();
