const amibos = [
  {
    name: 'Mario',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/mario-3811cef2db62ed91f25354400231cbc001431006e479f97f5fd51ebe4fbd4504.png',
    price: 13.99
  },
  {
    name: 'Peach',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/peach-71996e09299c6b3184d9b25d2ed73bae36cf048703bf9734ca529e914e2ba751.png',
    price: 13.99
  },
  {
    name: 'Yoshi',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/yoshi-dfb41fb82f0d07fb019eede4a75e7468ea36e5976433d9b1020f82e5bf293213.png',
    price: 13.99
  },
  {
    name: 'Donkey Kong',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/donkey-kong-cb04725b29830d126c73d37d5628afd98037ade97548b585065139fd5d967b91.png',
    price: 13.99
  },
  {
    name: 'Link',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/link-651f84747108a91a9ac1a4b6b9b2268411fe8efc315bbbfc4159494a754fc579.png',
    price: 13.99
  },
  {
    name: 'Fox',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/fox-f44d22aa3efa1b8d6bc6ae09305cdc475cf3b79249d14ccb00065529f285549e.png',
    price: 13.99
  },
  {
    name: 'Samus',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/samus-d712043ca94ab732583c68974c36f39ecb1eb6760c3603fce622f81ca9f99115.png',
    price: 13.99
  },
  {
    name: 'Wii Fit Trainer',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/wii-fit-trainer-6f432f5d7972bd58fa0091584229680b6284e682c2a096a83a2e65bc76ab60e6.png',
    price: 13.99
  },
  {
    name: 'Villager',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/villager-088322c7df77d928e2c333123693a0e2ffd47c9c85d0569c793c55c33c4a08f6.png',
    price: 13.99
  },
  {
    name: 'Pikachu',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/pikachu-bda80d778481238b95058d20b7b3f82b5cd9cc080e02b6daf80078c51c5ba761.png',
    price: 13.99
  },
  {
    name: 'Kirby',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/kirby-c8f94a16395ca488ed9b3e1a141e34a70e279f8e43fff03bcf31ffd489a1777a.png',
    price: 13.99
  },
  {
    name: 'Marth',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/marth-1f937c0d4aa783d71f7a2cec3ed1bed811418636795e960ac78de2675ce43975.png',
    price: 13.99
  },
  {
    name: 'Zelda',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/zelda-8c43bed3226a601def406aa6cb20bd52488aae36a75c3b50302bd275bdae26a1.png',
    price: 13.99
  },
  {
    name: 'Diddy Kong',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/diddy-kong-ef90b471c90439a6afe77e7082e4ba00124092bf2c4cbdb8090ceae8dfacef42.png',
    price: 13.99
  },
  {
    name: 'Luigi',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/luigi-590839e55e486f04a31b24a7e4eff7f386f15d94e90303706262de1c63d25284.png',
    price: 13.99
  },
  {
    name: 'Little Mac',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/little-mac-caf04762e7dd1c880434a5707fae18df713d8fb052357a86ad277259484ded39.png',
    price: 13.99
  },
  {
    name: 'Pit',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/pit-e1b6720b52d8708418342fd91a061907476676eeb7923849e22274fed8414942.png',
    price: 13.99
  },
  {
    name: 'Captain Falcon',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/captain-falcon-f54bba3b00adc703ae217acae30418ed913c7b2564462d0efc56946d6ef82b5f.png',
    price: 13.99
  },
  {
    name: 'Rosalina',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/rosalina-cae41e89362b37d3b3d0c36ad916552590c10fca351be9cb53f1c3421f44e836.png',
    price: 13.99
  },
  {
    name: 'Bowser',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/bowser-09564cc1913ffb7085a1145bdcc8fe2d6ac7da3f2c03de4b8f0720254b0cf004.png',
    price: 13.99
  },
  {
    name: 'Lucario',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/lucario-b97d392e18c7a37be421b28d2911205b2b2d842c546663b3091c41ec481ea2ca.png',
    price: 13.99
  },
  {
    name: 'Toon Link',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/toon-link-847e3260cf1d7b232cdaf5ff339e5934e04abc75ad87da3846fadff5c545f540.png',
    price: 13.99
  },
  {
    name: 'Sheik',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/sheik-ef477372791e711191612f1cfbe7e4db2b4101488f24ac8acfb97a90c2e76f15.png',
    price: 13.99
  },
  {
    name: 'Ike',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/ike-544a924afe0ad60fd588d9e0ca4fd0dcf285d9c15d0e0542033339da37b1d6c2.png',
    price: 13.99
  },
  {
    name: 'Shulk',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/shulk-d583088c7ae2512feb609b287001a0fefc8014a709684ff5832b06aac59d2e24.png',
    price: 13.99
  },
  {
    name: 'Sonic',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/sonic-8c5695a7f2a0db6b707844886df14183f6d9dfdd45cb96b9d6911dd04779d3e2.png',
    price: 13.99
  },
  {
    name: 'Mega Man',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/mega-man-15d49e3e598fda25d05658642ae469dc3827772c0ec7d0644ab11eb7a0f6f6ea.png',
    price: 13.99
  },
  {
    name: 'King Dedede',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/king-dedede-1ddc2dadfb48d056a13661fbfe57d7d29eff780c25f12b70dae7275576585810.png',
    price: 13.99
  },
  {
    name: 'Meta Knight',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/meta-knight-ec21f6e7ee35619946b62b08a38fd62612d9f7e9ed6773fd2b0615a4c97767d3.png',
    price: 13.99
  },
  {
    name: 'Robin',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/robin-e7cd9dfd98cc506d33e76612210b743528e3fab2760436e17b4da02a70c3e1a2.png',
    price: 13.99
  },
  {
    name: 'Lucina',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/lucina-8ce7652fa486bd398b99cf04c1d9bef9a68a02dadca377b435cdecd768dc17d7.png',
    price: 13.99
  },
  {
    name: 'Wario',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/wario-db03bcba509a4363d9640834733d7bb36ab9c1056cf0f3752ede9e749fdb9b81.png',
    price: 13.99
  },
  {
    name: 'Charizard',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/charizard-b6ab1866a0edc3db9642b8992e04d9bbe84ccc1df8467ec1681a7ff6f23cf40c.png',
    price: 13.99
  },
  {
    name: 'Ness',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/ness-75bb9ac81e29838ec5bf2a875e9bb48a27d5858e8f80c8443c9ba29302ecf060.png',
    price: 13.99
  },
  {
    name: 'Pac-Man',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/pac-man-f554ccfd8f17794282a5b48d41b718f6831a6027d671c4295e63aabc5324e99b.png',
    price: 13.99
  },
  {
    name: 'Greninja',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/greninja-f98bdcdb619e25802f2a80778f9d299a93c869691d25ed8ab2d026603f040037.png',
    price: 13.99
  },
  {
    name: 'Jigglypuff',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/jigglypuff-a0e2bf334ad615cf2830084c603ce42d3cd9369f885ec2f95a28e17cc0ab312c.png',
    price: 13.99
  },
  {
    name: 'Palutena',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/palutena-989a336a7be95b8d3499e180c68a091c604097ac1f74ce92bfd62b6773aaa39c.png',
    price: 13.99
  },
  {
    name: 'Dark Pit',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/dark-pit-19fcf08891316b3603676068b213b7188ac262e5e0fb2eccee297be5bb418109.png',
    price: 13.99
  },
  {
    name: 'Zero Suit Samus',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/zero-suit-samus-d6d7c91079c97cc940fa24b584413ef64d797849a7354f2c4d739c9921b5896a.png',
    price: 13.99
  },
  {
    name: 'Ganondorf',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/ganondorf-402fb111fab882d73c8dae3282b739741975715593b99a2dbd9d259b444f08e7.png',
    price: 13.99
  },
  {
    name: 'Dr. Mario',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/dr-mario-c238b91da4180bc3787084ff6d524b916139e95b71ca9a2fa14df4a715a23fa6.png',
    price: 13.99
  },
  {
    name: 'Broswer Jr',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/bowser-jr-89465fcd014bfeaf9c9299a66830353cbc8afc0ecf441be7aaf97d7114ffcbb2.png',
    price: 13.99
  },
  {
    name: 'Olimar',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/olimar-db221908ee3643af1cc1022c8631dbd77be9e650004013d8e49ae233f333a085.png',
    price: 13.99
  },
  {
    name: 'Mr.Game & Watch',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/mr-game-watch-7692e99458cd02f736b63b7dd2c3629cd5f9717f4ecda923f0527ddf9d19b730.png',
    price: 13.99
  },
  {
    name: 'R-O-B',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/r-o-b-nes-16cbb94a2946d798b35543d245a398a606b3f02eea33347dd08946434e4a1468.png',
    price: 13.99
  },
  {
    name: 'Duck Hunt',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/duck-hunt-3100ad431df2d167f5886f12078bf25c2151427c48c78ea363fb64ed03ac0ad9.png',
    price: 13.99
  },
  {
    name: 'Mii Brawler',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/mii-brawler-6305a1437cb1ed7a87692b2df3a01d7199c82ddf66fc51f2aa05db2ddc29eccb.png',
    price: 13.99
  },
  {
    name: 'Mii Swordfighter',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/mii-swordfighter-f0e278428fd961607acb3e5afa0fabfc7f46934c5b2d079cafedf4010bae7b30.png',
    price: 13.99
  },
  {
    name: 'Mii Gunner',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/mii-gunner-2a0b3507113423a632b8312dff499033bf63829f185af732f66f13002e2af46b.png',
    price: 13.99
  },
  {
    name: 'Mewtwo',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/mewtwo-f5887a2c4c049a66060c8648f646ea37e4d2e272fc5930d2a738a01459b002d6.png',
    price: 13.99
  },
  {
    name: 'Falco',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/falco-512ac7378f87842d82aabb8b717c145c180908df41c3842826d70bcb6180dddc.png',
    price: 13.99
  },
  {
    name: 'Lucas',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/lucas-75736665e9fbc2c4a1ef95292600fe39327ebb636d3833effc92e5965785c50e.png',
    price: 13.99
  },
  {
    name: 'Roy',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/roy-2106dd5f77925b8fd55a7efbb665d2fa172b060f39caaefab40bdfc43a3e79c3.png',
    price: 13.99
  },
  {
    name: 'Ryu',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/ryu-31512bb8534d1755ba67bea885521875398b9a4532ad1cb12b413a48f6a46ad0.png',
    price: 13.99
  },
  {
    name: 'Cloud',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/cloud-ad15836c1dadf2c05f01361cb1902cedb19f693de16f8cf7f81ecd7c375ed2e2.png',
    price: 13.99
  },
  {
    name: 'Corrin',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/corrin-24fd31ce2ad3f192211997dc022bdcffe44bd5fb9492c7489811ccb3444d1baf.png',
    price: 13.99
  },
  {
    name: 'Bayonetta',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/bayonetta-80c1e6c4db11a36c5e260ef8f1139f3886eaaaa3dcad7ad3fc9f093bcffab499.png',
    price: 13.99
  },
  {
    name: 'Wolf',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/wolf-259df02e7587fef30e8de91d46b3c5b394c4bc88b6f6ff4a9cfd48a9619047ed.png',
    price: 13.99
  },
  {
    name: 'Inkling',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/inkling-08ecd83c72f33c334ae987b435d5c70706d224e83f637ff1eb8a90bfa0d5fd21.png',
    price: 13.99
  },
  {
    name: 'Ridley',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/ridley-a70bc0b573522e11f3209333bdf36bd7cfe54209e7cfb902e6a9136cebd46e83.png',
    price: 13.99
  },
  {
    name: 'Piranha Plant',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/piranha-plant-bb5c9cb95c2d8e754273c7eecd8e6cdb6452623c9e885bad74d112c643f77680.png',
    price: 13.99
  },
  {
    name: 'King K. Rool ',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/king-k-rool-153e779dc4a1b6c16a40a3939beb178dcbf00ef466e5f6675c1a2155ab736839.png',
    price: 13.99
  },
  {
    name: 'Ice Climbers',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/ice-climbers-eb95ec439d887580a3e336e2f60e84cce75b7d9c5aa355b7c524a9df7a634c65.png',
    price: 13.99
  },
  {
    name: 'Ken',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/ken-2abc651ac283b7c0c9466d08449593f23460589d3fed289b8dd0f713ca9c5571.png',
    price: 13.99
  },
  {
    name: 'Young Link',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/young-link-254fdf529b51e9fe38539cecbbeab31e726e08e9b8456623c65b350783ab4f9c.png',
    price: 13.99
  },
  {
    name: 'Daisy',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/daisy-1ec1c9ef5a4a9400f560c6aa0383967d2215d993c842c0f6a7382caf4a312d4b.png',
    price: 13.99
  },
  {
    name: 'Pichu',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/pichu-6a5f0087e83d274ee2947393ab47c8ad372ccbcba6565fddd79d40eb78bda1a4.png',
    price: 13.99
  },
  {
    name: 'Isabella',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/isabelle-7e3edcf35b6be259e8c37fb1a6dc4844c84ec5befd89cf9aee96c87a696ae822.png',
    price: 13.99
  },
  {
    name: 'Pokemon Trainer',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/pokemon-trainer-aa574131cae03ec5206108c0b970b6bc90ecc09f2305f45f516122c6e211f777.png',
    price: 13.99
  },
  {
    name: 'Snake',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/snake-520f8046b5bdd41404148b75e24c1d8182b8a674984c802c06b14986459d2c33.png',
    price: 13.99
  },
  {
    name: 'Ivysaur',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/ivysaur-4f5f8a66cd435f593effb54977b93b588d898fd9d036031293dfc915ea4f7eac.png',
    price: 13.99
  },
  {
    name: 'Squirtle',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/squirtle-39d4463b35dc3dfa76db733ef1bb162cf2ddd7b9aacbbf183c440e40ea97c729.png',
    price: 13.99
  },
  {
    name: 'Simon',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/simon-446360e6318f48d552250d2e10035e54bdd6f0a5fa18ae64ded9db573a3e51f3.png',
    price: 13.99
  },
  {
    name: 'Incineroar',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/incineroar-25dff115cf3f6d6c3d3c3a634b367d55b1a3a3d0877855f24235bae7b79fae85.png',
    price: 13.99
  },
  {
    name: 'Chrome',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/chrom-e3b345b7977c43ba1c616e81a0f4396c7e0be51e951512137c0c54a35800c2fc.png',
    price: 13.99
  },
  {
    name: 'Dark Samus',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/dark-samus-32e4e91a2dffb0b7a1256179830266cbbf5b7647c74cfea2c85281248690a50c.png',
    price: 13.99
  },
  {
    name: 'Richter',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/richter-c51ae3f04a7b45ac6982321e22f70eb610658591e803aa7a32da4e1edb74b3b7.png',
    price: 13.99
  },
  {
    name: 'Joker',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/joker-80364597f2dfe0f5c9845fd04d736f92368a4e526b5a1af084dd252833ccae51.png',
    price: 13.99
  },
  {
    name: 'Hero',
    pic:
      'https://dt2t1o4a01q3k.cloudfront.net/assets/figures/amiibo-sized/super-smash-bros/hero-8d0dd67a41ed6ced9f54ef8973a73a2f84746f70b6cc1627adde44c34f66b30a.png',
    price: 13.99
  }
]

function addMore(n) {
  for (let i = 0; i < n; i++) {
    amibos.push({
      name: `test-product#${i}`,
      price: n
    })
  }
}

addMore(3)

module.exports = amibos
