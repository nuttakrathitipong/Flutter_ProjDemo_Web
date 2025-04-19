'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/config": "dbe7d58004bed2026d434b3e14caac68",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e57e49d9d741ca1e2f2eeaa83d22b1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d1e993d8d72be16858b1f077d71b228a",
".git/logs/refs/heads/main": "8e0149dfd63888dbd3de6ffae699edba",
".git/logs/refs/remotes/origin/main": "74514f33d9b82404b33c15e438e4d9f3",
".git/objects/00/5acbe1fbecf9c4dbc891e03ac7259874151205": "542104dff1b701b90a4fd6d0acaa995e",
".git/objects/01/f1f35311a0a1b5725b97ca2b722dfd1afde3ac": "5f7ea5be426808713e66130c0d6d37ce",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/95172a0707ab2b4b2510bc847e46d5eb55d32e": "7593b7faf1ce88706e46a0ac184e0a76",
".git/objects/09/f4e1067ac0b935608d5006bdb645614481622b": "de5b4b711f069a8134623dd0f0b25649",
".git/objects/0b/7ea08e6d6ce2e21b213e017d04836f221751b6": "feefec808dd838414846ef88512f237d",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/0d/9debbb230bdfa744486b4decbb6cf3bfadcb58": "4a7ba503b780998911b6bf3cc4ad4cbb",
".git/objects/0d/d61c8812a35304d33827d90c1543abff1272df": "89a867c56b0bd803a36fb607a757d993",
".git/objects/17/e6adea99667971d5fb2cddeb4568aec6f4c832": "4d91a16ebc4e69cb4d1fb283130724dd",
".git/objects/1a/e411ef59f3b74565fcb36d2e04be746e63e2a3": "edc7e8340e3cf423613570936c4c888f",
".git/objects/1b/61c0db29d643d78b05772919712b77cb16ac5f": "799cb7e505f2716e89551f0638ec0937",
".git/objects/1b/84f8d046c32a12d86eed5a4228f3075fdf732f": "4fd6835d186e02b47ed0e137ed614228",
".git/objects/20/7f9a28e24915b4e1a8c47796e577f4b49e62bf": "0c364dd81600fe0556db151cd26c2eed",
".git/objects/20/b339082e5d19fd19202f773dce1dc9929fad75": "5cd0c9797f68fb7a126d11dfba80db6f",
".git/objects/20/f35c7f2df7ae4a6b5ac883d6f522345806ae14": "f33124d625a1a6efe3df7512dd000e8d",
".git/objects/21/aaa7d7217273a34c76cfc5f0cca522f95a8418": "32dbaaffa2867637ec00a0d3dd9e9932",
".git/objects/22/1eb37637289f245f10588aeab908e7f61c70cf": "79157cd472877e8dbb32835a89dd60bd",
".git/objects/24/e33f473feca25499279545f869d4ca840d0219": "0de9eceb05db5a5f65fa4a00ee74afec",
".git/objects/28/18098d54868a43bd042cccc5c87a6509023ded": "6410945f9258af1836a50777cab65d7a",
".git/objects/2c/0c16bd461dfcf226db20c3fb8357643bec525e": "a896f9e5fea26de07b6e75c659eb2e1b",
".git/objects/2c/2976e930f9666e0af53a68d7dc79befce3d9df": "01fbac0f5dbe10d903b21efe010e9160",
".git/objects/2e/0a5b2041deebb63da4408a553b5a3318f4429b": "ad00d07e20ddee40c43f1ccb21ce7b24",
".git/objects/30/f65e1d3da58291054b7daee9300c6b8bd38b8f": "e4481e323ff80b62ca3ae27b4b1705ba",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/ec0c30417831057edb06b1dd8029ee72519c18": "70770bb703668f216657384340b730a2",
".git/objects/35/3cabf24fd2df6388dfd2d9f85bab7ba076acf4": "a975b08c0411b0264a28e8d9f3d6d03c",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/30845d45ddcce156d81fb5605846b2fc118883": "3364b945a83881fa70fb6efe597c95df",
".git/objects/3a/a76564a722ee014961c3d7fa1f0276c60b5f14": "32ebd0ee10e82586b51897b2999a1794",
".git/objects/3f/652b23a1485ab77daf7dcb1d6d92a9c5803345": "e086015134107f44c49bcd5512d25426",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/11eba0f6009811ffd27f1302105bc90161fe53": "ef91e1d9fa45929a89587ef204b8f050",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/970a1d7dc7a858c3b94ca32d5ec56ba6745d9c": "83222d4d491be572a4288810b48e3f79",
".git/objects/4a/e8edc88f5655f3c76b9c16052169a5e8021a7d": "65c21c2e7039780df5f62ff0f40425bf",
".git/objects/4a/fee717c38aae30167f51f088c2c02365b46aea": "8169753e93def46ceee8fd3cba81027a",
".git/objects/4d/d437af8f01e908901a5871375a1dc3ac5c2069": "97d01b0f519ba52b4f807a15df417519",
".git/objects/4e/740ec1aff1c84c79afda44d60ad9f000e3b9fc": "f38b81e0967cd057c587b8afc5f9c525",
".git/objects/4e/d57bc5b4b04c3bf300d1bad976576d68bf1eea": "6549d88caf1615603d813d10ffed9651",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/796c69a54a39f82ea95d39f54103b48a679069": "02200cdd14824f4e18eca7762ce0bac9",
".git/objects/4f/bf2730cd897df0a823091b62871077f9664a6c": "eebad8f01bf4482820038625e7c0ffcd",
".git/objects/53/6c9b8b17b8b78ddc67290d35c56bd0427ac919": "145e295899d9abb3e9350dc2d030b5bf",
".git/objects/56/4f90a7d44b2f254c576f646e1be0f71f5e0446": "c6eaa4c349b1b66751e853af03fdd081",
".git/objects/56/a8024ef1b53064f700e875a15a7097bc2f74c7": "8550b106ebb50c3bf93143ae6176afd9",
".git/objects/56/fa4a5511201c6f7186b6ce46b99422f563c987": "ab29f59198401102406167686329f905",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/dc776dc39163145593484fb60d0f1a824f6a0b": "c95e0c3cd94ab1e1eaab1860d41188be",
".git/objects/58/4820e1a28cb1a3fba07cdfc5e54d5696e72a4e": "3b9de66f46776613c3b6782491d389d6",
".git/objects/58/e0a6e254637fd7de05e8c8cbbea4b1a002a37a": "615087556f5ec145f944c68950dddc21",
".git/objects/5a/50fe44b8aea836792c57a2d0fff18fb25cb65f": "6c8cdad40955a78ba120b8a958f231a8",
".git/objects/5b/9057d4920738cf28def257a1eb60ced86da9c6": "eab26203825cdb99a106c682aecae98d",
".git/objects/5c/80287f533e76a7c09653f3abd990b5005c34a3": "491e42271a18a52e3f1c0bb774637e9e",
".git/objects/5d/716de42693ec66c36dd1be48d5ef325c10dea9": "d577f4881f4b447899ef310d0dcd8997",
".git/objects/5e/6ac530c0c34e5486155cf5509ab10033533385": "af9d5d3530e4c562bae5364e0c37e85f",
".git/objects/5f/973c86b45fcfe4f474e71b23d5877f50ae4452": "fe6fe22ad61ccbef05f46b9759cb7faf",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/d1d5e64015aa078c5c45f28d31cd543c8babe0": "2a1b0e5253b002a26ed6b77957b45b69",
".git/objects/60/49d02e5517a88f72bb492460794cc6c57fc2fd": "83b63fe112c0ee47097e27eb78179a84",
".git/objects/60/d83237640330c1141af10fe5635229d616afe2": "f8d2bdc9c607946299bf404f87aeec14",
".git/objects/61/388d0bebde418c9f89322c356dff2665de4edc": "75af2956cf0295f27bb7cbed489f21b5",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/ca465ea6bf96cde548079629dc3e6cdafac06e": "6982f8fd042b6c06b1dc7667ed480444",
".git/objects/68/87af61205bb734bfc0d5137fca61e404c26a86": "b7ea99188fd35d67b4c884421747fec4",
".git/objects/6a/56f7dcd4952b3ea31ec01cba1450c260509e47": "a3e752fc1909c2d568f35cd8b82708de",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/ca96768139becebc4d65a51d3ee591aec634e9": "843c7239ac10975756be87c72be5f32a",
".git/objects/6e/28d858fea480dc7a1c66058bb6a1f18532b6cc": "2c7721f0312124b48dc21c7139c82833",
".git/objects/6e/94d1af6a29bb6526fc6d20c8455744ba2b8e8d": "4a237ff4ce284b0070be8e3aee95b187",
".git/objects/6f/d71c01ed334ee0f6273f3b3d19c71127e23b08": "f191c12e4c77ffd3025368e438f682aa",
".git/objects/71/e9519b7dc8d9ff8ca85f46bc0c70b96d09a6c3": "69d4965b2cb0f25fa50a250161ab4ac7",
".git/objects/73/49c0e9d1614640542435b18ffc26d8fb0477cf": "c420af154dad64c7a9d1faf1e4f2203a",
".git/objects/7a/553dbb04294b93d905d45c4e63ebe2b6828385": "ac1ecff06bbc63ebf44d1ed63b86c42f",
".git/objects/7b/a2cf3e1b4205d468611c9478a11623123d6ec3": "34522bf1a4d6a4bc16ecda7c984212b2",
".git/objects/7c/221dd3a4a859e056258524ce308029d1ffd339": "17cfda7177a192028d9d8f400bf73097",
".git/objects/7c/97c4b9294bf0fb5355cd77b81b58a335d09a39": "14d5e5305679f8adb0303c7ffcfbee68",
".git/objects/7e/d7c2ad0e957e936efa648bbbcf6014b26b12d5": "673bfecc2762da465b4d526fb2c03364",
".git/objects/82/185cfe32c77cd1e56da45a6e79fa54d1c185fb": "22cc05bdb252c639d0af91765796143f",
".git/objects/87/2afb75251deb2caa86700c461b66bd39584460": "98e39c7393c551e9570bdf6b769780c8",
".git/objects/88/7e197f0a0672b5fbcea9d805223caab7ac2c28": "e7d9e829c7e9121c0f4e964472fa4888",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3830b079ffb0702510b4456b8c95e941c8dca0": "77bb7c2dc0ba5951b51ea9aa393bcf74",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4a19dd9588f407fc76864bf853f258902999f2": "4ef1e64fc4624eee27203c3e8d39e11b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/be8adb3ce4c4802bd8760286d64a8c7d550984": "c881c27ab3debc3d952ed06d790ebaa5",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/93/ea27e0187df28d8b6b2b427cc976e0c0082709": "5c9bc7ada8d63de35767992f3d086648",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/96/b119b7601e4c9dea6fa994e584b3baf6dad0a3": "21c08207a34dc927cc58e84de4b2b65c",
".git/objects/99/0e1ee0b245f3ae993987a80002dbb5b4652774": "727c6214208e2e4519ce71a824957abf",
".git/objects/9b/4adb7d37fdb48de77b147cd67f78374f620d45": "7406d9b88c8481ff5bf564e2b06c4b27",
".git/objects/9b/cb2410276ae4117a8ac0cee4af5e8efbf37228": "89593a54538b074316bdef467a3213d4",
".git/objects/9d/2b46902cb15bcd03bd1730c262211f206de869": "0785a8a49ac7e652fc36641d27f7758d",
".git/objects/9d/81742bf8af8aed0931a0c8ab7c870bc7f7aea4": "0b4143cb32630aff18544942765fe66e",
".git/objects/9e/8701f273cab997f9522f50c1d9e6660dcb3129": "d8bd4e21742396cf9b6ea497017df935",
".git/objects/9e/bbfbc10d4fb376972d085e52cb0e3c52e5c3af": "b558801e2ed723947f2ff14f97b990b7",
".git/objects/9e/e82501b3a62a82b5749edc534568b187539712": "c8adbc0e6c422de2f58108ca83fe9ec0",
".git/objects/a3/1278d42f348123b4d1db5b7dd1e1a462e3881a": "2bc3e10790fd4ea3c6894b53678de1fd",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/bb5cecdfd723e80b6e934ca0442fb03103b941": "59a31d4e33c537a41289060493d69d50",
".git/objects/a7/3bb5c2fee9450308fd88d7c36fcfefda04ddcb": "2be6b3290f88703cb0d5d2ccdadede90",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/64cc44b46094cfc47f02b3409544c3c6c7d2da": "328f53910fccd798c797b9e9f59fec21",
".git/objects/af/d246a2735fdb6ab68abaa89feba3cc38c9bf4f": "eb4650b7135fcb147b1dc3cbd0a4c50e",
".git/objects/b1/a7cf40397d11b673d5578dcd008d56aa580ba6": "e011c95ba7714afca157918cc9768346",
".git/objects/b2/a9d3cb5a7841f18102182cf49bb2c8def9a8a7": "a6b13dedeb31e58fe7a5dfc33c716021",
".git/objects/b3/a3bb56167da3e387aea00c52ac23bdeda31b2e": "1ce2e1af368c0a7fbe7a00945bc28571",
".git/objects/b3/c885995fc23369bb6e588ec9b39e5ef5271afc": "a18e858484957e62636d856e46cdf972",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "33c8da475e2b1b32eb9336b7a07d0e5e",
".git/objects/b5/b7000ddc8b47b15b071d9c15b3d37057c46194": "d27af603a227480c8195c2e572b4e6fb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5dbe5de9a7f32c9e33e20fb1ea6e432d9468af": "85b5a481500adfa975c4709d0340ff82",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/906da5f4b8b993eed9f0098f9da545de9d4c38": "d7aae13691beccb224cc8e9da0d3e89a",
".git/objects/bf/6180fde9eaec5df4032a4e77907cfa3e02f8e6": "5a107b5787868b17c3d47b4a7c2d6d0a",
".git/objects/c0/06d6fd20d8b782590e091938dec3bbec1c6e57": "eafaed5a3d096f81a2df0f44b58b2bbb",
".git/objects/c4/13cb374a8abe9a4bc7f713cca486bfc2cc70da": "e7b244e1559c16f38fb9b51c7440bb01",
".git/objects/c8/59f6e0d14f2114e0320c418a633007d1075a7f": "83285665ed2c4a899d6d4b51af4a3087",
".git/objects/c8/9d262e707075ee63854cc6f4ac80061449c185": "759f8b7fce701ad731127a5d91f8b8a0",
".git/objects/cc/624861c9c610963188297f10762323b7e80b15": "29945b3a2d87dc328156aa65d2ab609c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/9caaee243642c7f1b7a59f50f3279b5626bfc5": "967053c8706d90e0744fde0434dd4941",
".git/objects/d0/049941f47f541840803335294bd76d10dd099d": "fb95371afcea7408e4ebcdf54706e9d0",
".git/objects/d0/101e197a6e0f96d21d0ccf61d6e78d2656c764": "e7ab2363191e31ba02430d1f959fe04a",
".git/objects/d1/2f6efbadaac52a326bfd56de5ac4406c1bc7de": "aad0dc134186fb87e2e82f28dd28d4fd",
".git/objects/d1/c708d6367c1ab326966b17aaa231b20b91eb9f": "52949b48111054117a282c9b579f852d",
".git/objects/d2/8b8db7590570465fb0e99aff219ccd910b6daa": "afc2151a28cd8c2a9c0a35b8f230fa92",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/d902866f4af9d65d637cb40f9d4dad8a9b91e7": "37caed9ffdcca4917cbc1289e173e846",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/075f759046635a226679fd18ac89f3da216408": "b6ea6d7d949bbd1841c33ec4d7e486df",
".git/objects/da/81b8a2090a7d54f7db47b96b7ef8149921557e": "fdb949d08e6bce56462fa2c93f505da1",
".git/objects/dc/021e762015c484e59c5f8531f2db1a49c206a3": "8c26e72ed8bd6a61a9689c3d077fb570",
".git/objects/dc/ebd4e50b241c64c6a7b5277499cbf322feb353": "4d082f9df0b3ebef043ef6e891eeacb0",
".git/objects/dd/ec9eaad3955e437c6c9b3acb72398de222da6f": "96f7755b83183d844dd7289e577fe9f3",
".git/objects/de/38b92566df492d2057ebddef193eec0c594e68": "73ad31563b070a275f42c5c59005fb67",
".git/objects/e0/df0b85edd2fa3026416c0481f078f3d4748eef": "ece8a201c2641fad812d57cdb07d7f18",
".git/objects/e1/8d8611012e2154da4ee5632694f66face4cd25": "20f9de425025cf9996373846a7a8e396",
".git/objects/e3/5eb456279f7c3e24d06f3fd7a823147ccd7292": "342f5b6b1c427b8e07f99aea4871a569",
".git/objects/e4/2f8a5d1b6c985ce5e03a8f5b982a76c3e3bc47": "2fb43ab3a8c8e24256cc3efaa76a0416",
".git/objects/e5/bafba0afbdc4a5b3935df8ad9fe0058e01678f": "58cca96c66bc1f2575300b6fa804d7ea",
".git/objects/e6/6ee152204d208b0a92a8fbcf61c53fe9b725e4": "a9d783ceef2e5f8fb9e0aaeed375ca4f",
".git/objects/e8/9c5fce52d3f03e16978441ebf584919b048639": "ce75ae7548ec0424f288e9866c780d50",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/5f2b2188efb8d351e17be1b43133cfa18c4134": "414598356bc84b1b0d2ad78660273935",
".git/objects/ea/730affcdb90871514d1d698eff63ec32d446df": "7ea341426c13c51a5b21b5c3fa0c79a0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/bfbfbe5c561f772f4d839430f2dd0c4d3a9ed3": "c3585575688b07fbe280b500c8a3fb74",
".git/objects/ed/94f33b73cead4d1ffcaf98e392e5490b83db09": "c42b7bb803dfdec612ebd06126431d61",
".git/objects/ed/d1bd72a56c4471e55419848a4fa8d22efaacde": "410df7fa9c9e36e4fad25c0311cdbf24",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/efe610b1bf4dc2d888e16bf9f434676a97cb50": "446c74c4f042ed56ad841542a4d4731a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/648b2761e07f5de8ed6cedaa5ed0d96702563b": "25f2d4d899940eb070526e8599f053e3",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/14e62063c03164b8139c9cf46fdc2141f56e17": "27cf4ba06ae3d49962f8ac58bd20bfff",
".git/objects/f5/6c832c3fa057116806a5043b235279b9c88cbf": "54a276010fa46a97b6aee11a1ee2c6e7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/206951b683cedc93ec183e840bf58ec275b452": "493b7722e6703d1a6db63b4c393ac288",
".git/objects/f9/55998aa44d1d0e096722849330d320e52cb2ae": "3bbd5f583df3133f5f795eca75778d0b",
".git/objects/fa/d02bffe1a6c21c999e28a6e734cb91a0433d51": "75ba3dbe274d9a7fe6f71062f5b8bad3",
".git/objects/fb/6ba9fa3fd78d3e1b5e70a4a5c3486f2faa628f": "a33cb4c0cb447ac12e705559989d6e95",
".git/refs/heads/main": "674d32adecefd991858679fb6cfeb432",
".git/refs/remotes/origin/main": "674d32adecefd991858679fb6cfeb432",
"assets/AssetManifest.bin": "b07922b86d540324e0fb8ec50c4ff051",
"assets/AssetManifest.bin.json": "771c63cab4fd48fa1ef250a9138cc1b0",
"assets/AssetManifest.json": "712eac07e4a246014d5524fc2bf16669",
"assets/assets/images/android_icon.png": "16d76bcc1b7c452ee1a0d10bd9f3c9a1",
"assets/assets/images/apps.png": "3b4b646fd409cb870a135ed4b739e890",
"assets/assets/images/arduino.png": "175f57ebc2a4aa2581ad4baecc5560e2",
"assets/assets/images/automate.png": "9ad2189e84c8732659b3b3d161dee35a",
"assets/assets/images/azure.png": "987141c7fb596a20430dd95774110fb1",
"assets/assets/images/bi.png": "a5a90dc11e83e4b4eccaa252c5975ce2",
"assets/assets/images/c.png": "e77435780ae86e1edccb4dab117dc167",
"assets/assets/images/co.png": "6fd7a8f2364b3a33c14e8f6dc862f710",
"assets/assets/images/coding.jpg": "8124bcb51b09bdf56c71135199ec76cf",
"assets/assets/images/coding.png": "8d605bb677fdac557b16b3e36cb1f4fb",
"assets/assets/images/databrick.png": "5dcf9b93cd17079cb650bc0107275ef2",
"assets/assets/images/desktop_icon.png": "510deea38b7862484a8e26586f362152",
"assets/assets/images/firebase.png": "c9e1c7a50faa42d1583b54038aac3fae",
"assets/assets/images/flutter1.png": "d4b64d7bba6e6d281a30d110aff2be40",
"assets/assets/images/git.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/gx3.png": "861bf2cac5b9bf4102a814af3e82ca13",
"assets/assets/images/img1.png": "7963516d4b31a0013cf24ea22872c26d",
"assets/assets/images/ios_icon.png": "fbd75fd6af3e3ba5c1277b76803c28e7",
"assets/assets/images/ladder.png": "da9dbc96ec374761f635682a6e058aff",
"assets/assets/images/linkedin.png": "b2597cd80c8da3f8d26d0c1bfb5ed71d",
"assets/assets/images/linux.png": "56974b4a61f4dbbe624cc6ca69b93b60",
"assets/assets/images/oracle.png": "66dd8ea6ef5b74d2fc576839b2c02846",
"assets/assets/images/pycharm.png": "5da70323336e660f903eaed202688082",
"assets/assets/images/python1.png": "f94eb89e1da1f5b2572332bfce032b3f",
"assets/assets/images/qt.png": "d492d80abcb4b7209547f470c80b7fa5",
"assets/assets/images/roki.png": "cb2a60e15a509a1adfa7917e1f9f68a4",
"assets/assets/images/siemens.png": "68d892205b1c998a70fac03b3aef85d4",
"assets/assets/images/spark.png": "5d27c38ae6e215068125ef2f3dc3874b",
"assets/assets/images/sql.png": "2b5af72f6c5d772b7dfc9da531828028",
"assets/assets/images/vrep.png": "10bab37400d1bcef8f227d37175c20c3",
"assets/assets/images/vscode.png": "c674346f730f23f63282c24423697c98",
"assets/assets/images/web_icon.png": "4a817a9e9f2e49e52583f172973d4d3f",
"assets/assets/images/windows.png": "5de5ef2789a2882028d7eda1303b82ea",
"assets/assets/projects/booster.MP4": "e9ac9fcdf2ae387ec88c0f642fabcf30",
"assets/assets/projects/bubbletest.mp4": "3d484da534f18a4ab05b0613285f7d40",
"assets/assets/projects/python.png": "a9e58974ef23ffe5eb9bd3bbac0b5645",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "535cb029850bdfea56402c6bc276e829",
"assets/NOTICES": "78bb98da328aac01996d394e4a342229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "027c853b52cd6dc02906bbccf37d1d23",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "825811ea5068fbbe62a9e861b7caa1cf",
"/": "825811ea5068fbbe62a9e861b7caa1cf",
"main.dart.js": "0e6c8e89bcde6e16c3287287218f2b33",
"manifest.json": "a43b48cf1e6677287f4d852ea8d1212d",
"version.json": "03ac4cb9478445346aaa58b867540bb2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
