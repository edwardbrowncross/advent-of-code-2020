const test = [
    ['a', 1, 3, 'abcde'],
    ['b', 1, 3, 'cdefg'],
    ['c', 2, 9, 'ccccccccc'],
]

const input = [
    ['t', 5, 11, 'glhbttzvzttkdx'],
    ['f', 2, 4, 'cfkmf'],
    ['m', 9, 12, 'mmmmmmmmmmmmm'],
    ['z', 2, 10, 'vghqbzbcxf'],
    ['b', 10, 11, 'tbtbvbbnbwd'],
    ['d', 1, 6, 'cmhdnw'],
    ['r', 1, 5, 'xrrrdrrr'],
    ['g', 12, 13, 'pggkggggfggggg'],
    ['g', 7, 9, 'gsgwhgggg'],
    ['v', 4, 5, 'tvsgqvvv'],
    ['n', 5, 7, 'nnncngdnznjx'],
    ['v', 1, 4, 'vvvzqvzvvvvv'],
    ['r', 11, 12, 'mmrwxhrzvmrr'],
    ['f', 5, 11, 'wcldfbbkxbfjrtffrr'],
    ['x', 3, 4, 'pcnxgxx'],
    ['g', 11, 12, 'kgggghpfgmwzgg'],
    ['z', 2, 3, 'zzzzmzn'],
    ['n', 11, 12, 'nrncpbpnlpnn'],
    ['q', 2, 4, 'qqgq'],
    ['k', 11, 14, 'kkkkkkkkkkkkkkk'],
    ['w', 4, 10, 'fkswkgwwhpjfcg'],
    ['s', 6, 12, 'sssshsssfssw'],
    ['d', 2, 14, 'szcsdskhhqrpldwp'],
    ['j', 1, 5, 'zjpjjqxjjjrjjjj'],
    ['q', 9, 13, 'qqqqqqlqjqwqhqqr'],
    ['f', 1, 9, 'vrffffffxffnfbffff'],
    ['s', 13, 14, 'ssssssssssssskm'],
    ['z', 3, 6, 'mwrzcnnf'],
    ['c', 8, 9, 'bccczcccctjv'],
    ['j', 2, 4, 'hxpd'],
    ['w', 8, 12, 'fwvzwgfwdwxww'],
    ['h', 3, 12, 'hhtmhhphrhhbhhhk'],
    ['r', 2, 4, 'hrqr'],
    ['f', 10, 11, 'ffffqfffhflfffffff'],
    ['j', 2, 6, 'ggppjc'],
    ['l', 8, 16, 'cltwcjcsxllxctxs'],
    ['t', 3, 4, 'ttwj'],
    ['b', 10, 12, 'bqbcbqlnzbtbrm'],
    ['l', 12, 13, 'llllslllwlllgltdlll'],
    ['x', 4, 7, 'xfvxbqxs'],
    ['v', 5, 6, 'xrvqvv'],
    ['q', 11, 17, 'mdblqqptcvqqfqqqq'],
    ['f', 8, 19, 'ffpdzwvcffmsffffbffl'],
    ['w', 12, 14, 'hwpjcxgcvpwhww'],
    ['d', 2, 4, 'pzdtd'],
    ['p', 9, 10, 'vgtpmmxppp'],
    ['k', 3, 4, 'vkwh'],
    ['d', 14, 15, 'swgpzprkmrkxdddk'],
    ['z', 13, 14, 'gxzzgzzjhlzzzs'],
    ['b', 4, 5, 'bbgbbp'],
    ['p', 2, 4, 'pnqcn'],
    ['d', 16, 20, 'rkqpfvbfvtcgdmhddpdd'],
    ['l', 2, 3, 'llzpllll'],
    ['v', 6, 10, 'hdnxdvxmxv'],
    ['m', 2, 4, 'xcfmcmmmzgw'],
    ['n', 9, 12, 'fmcndbqvnlnncqnxffmz'],
    ['t', 3, 12, 'bcttczggbtgt'],
    ['j', 4, 6, 'vwvjlq'],
    ['t', 4, 5, 'mttfttvtttttttw'],
    ['v', 3, 5, 'vxjvq'],
    ['z', 5, 7, 'kzvzzrzmwwxtnsrmhp'],
    ['p', 9, 11, 'ppppppppppppppppp'],
    ['n', 5, 7, 'nbzdpqvxxcmn'],
    ['n', 5, 6, 'cnnntn'],
    ['r', 2, 7, 'rrrrrrrrhrrwrrrr'],
    ['s', 6, 18, 'stngssgssnsrsflsssk'],
    ['q', 11, 14, 'qqqqqqqqqqqqqnq'],
    ['d', 3, 5, 'dtdvd'],
    ['m', 3, 4, 'mmqn'],
    ['d', 7, 10, 'ddddddddddd'],
    ['k', 7, 11, 'kkkkkkkckkkkk'],
    ['z', 9, 16, 'zzxzgwtjzzzzzhkz'],
    ['l', 6, 8, 'lllllllll'],
    ['z', 13, 18, 'tszsszrlzzqzzkzwxjxd'],
    ['b', 3, 11, 'bbcbbbbnbbppbbb'],
    ['j', 2, 8, 'jjjjjjjjjjjjjpjjjj'],
    ['f', 1, 8, 'fcltvbhffbqf'],
    ['m', 6, 19, 'hhvkzmqtmpvbvrbhwmm'],
    ['z', 7, 8, 'qzzmzzzzqz'],
    ['b', 2, 5, 'fhbwb'],
    ['m', 3, 4, 'mrlqtlkphwnc'],
    ['p', 8, 10, 'cprpgpwkpp'],
    ['t', 2, 5, 'tttttt'],
    ['m', 7, 10, 'zlrbpxxwvrjxs'],
    ['q', 10, 14, 'gddtnqqcqlfqshq'],
    ['p', 9, 11, 'kpzpppppnhspp'],
    ['n', 1, 5, 'wfvnv'],
    ['k', 7, 8, 'fbzwwdkdx'],
    ['d', 2, 5, 'gjgxfdcvhrmwwrl'],
    ['s', 1, 3, 'sxss'],
    ['n', 8, 12, 'nnnnnnnsnnnnnncvnn'],
    ['c', 11, 12, 'cccccccccccvc'],
    ['v', 3, 10, 'bvvvvgwdvqbv'],
    ['b', 6, 15, 'hfnlwhxxmbgwbbkgfp'],
    ['m', 18, 19, 'mbfbmmjmmmmvmmjcpmc'],
    ['n', 1, 13, 'jxbqfntqxwjncfzmftjv'],
    ['b', 3, 5, 'rqxpblz'],
    ['n', 14, 16, 'nnnbpnnpgnptnsnhnnn'],
    ['g', 8, 9, 'jgzgfgpqq'],
    ['f', 9, 10, 'fffffffffff'],
    ['c', 5, 7, 'crcctccc'],
    ['j', 5, 9, 'nnkwgjtjj'],
    ['f', 5, 7, 'mxffbff'],
    ['g', 2, 4, 'qggng'],
    ['r', 4, 8, 'rxrrzpjrmqlgvkv'],
    ['q', 8, 17, 'wqtdqqqkqqlldqqqfrq'],
    ['h', 10, 11, 'spmxjhhhhhh'],
    ['q', 3, 4, 'qqkq'],
    ['b', 4, 6, 'bbbbkb'],
    ['x', 15, 16, 'xxxxxxfxxxxvxxfxxx'],
    ['k', 3, 4, 'kqxm'],
    ['w', 4, 9, 'cbkrrgkzg'],
    ['s', 14, 17, 'sssssssssssssdssms'],
    ['c', 17, 18, 'cccccccccccccccckccc'],
    ['l', 6, 8, 'llllmgllkqsllsq'],
    ['k', 16, 19, 'kkkkkkkkkkkkkkkkkkgk'],
    ['f', 15, 17, 'ffqffffffffffffff'],
    ['p', 16, 19, 'pppppppppppppppgpppp'],
    ['s', 1, 2, 'ssnsl'],
    ['v', 5, 17, 'vgwwvvfvvldvsqqwvgt'],
    ['m', 5, 7, 'mtbqmfm'],
    ['b', 3, 6, 'wmzbxbxx'],
    ['h', 9, 19, 'lhmwjzxchvjsxtmbmqh'],
    ['p', 10, 11, 'ppppppppppzpp'],
    ['p', 3, 16, 'ppqppppppppppppppjpp'],
    ['p', 3, 4, 'hpjhhw'],
    ['m', 8, 12, 'wzvmhjnmlbdmwlnvwwh'],
    ['n', 4, 7, 'nnnnnnhnnn'],
    ['h', 11, 13, 'hhchrhthhmhhcmg'],
    ['f', 1, 4, 'fffh'],
    ['q', 6, 8, 'qqqqqqqq'],
    ['d', 4, 12, 'dddddddddddkd'],
    ['g', 2, 8, 'gkgggggrqggg'],
    ['g', 12, 18, 'ggjhbbljhgtfrgwgggg'],
    ['d', 5, 15, 'dddddddddddddddd'],
    ['v', 7, 12, 'kkmcjvvvvhvvpv'],
    ['r', 3, 11, 'nhrcwzxhrsr'],
    ['h', 6, 8, 'dhhhnhzhhdhhh'],
    ['k', 2, 3, 'vfkckkk'],
    ['c', 3, 18, 'nxcrgvbbchzbznxqxb'],
    ['x', 3, 6, 'xxxxxxxx'],
    ['w', 11, 15, 'wwwwwwwwlwlwxwwkh'],
    ['t', 7, 12, 'jttttwdtkzttttft'],
    ['l', 6, 7, 'tqslglhkxmcmjksxlc'],
    ['s', 1, 4, 'kssz'],
    ['b', 14, 16, 'bbbbbbtbbbbbbcbsbwbb'],
    ['l', 5, 8, 'llllrllhll'],
    ['d', 6, 7, 'bjddgkztz'],
    ['x', 4, 5, 'cnxxtxxz'],
    ['m', 3, 4, 'mmzdgmtmwm'],
    ['z', 2, 6, 'zzzzzhlzz'],
    ['b', 9, 14, 'jhbbkdpfwrvbsqchgl'],
    ['q', 8, 14, 'wqbtbjpfxxwrgnp'],
    ['p', 14, 19, 'pxmfpcpkppppprppcwx'],
    ['w', 5, 8, 'wkcqvdwp'],
    ['x', 7, 15, 'zwpzjkjtdrhlwksxdz'],
    ['g', 1, 2, 'bggg'],
    ['z', 3, 5, 'zzzzzzz'],
    ['v', 7, 10, 'tvvvvvvpvvvvvvvv'],
    ['r', 2, 3, 'rrrrrr'],
    ['z', 4, 9, 'zpzmzzzzpzzp'],
    ['s', 4, 6, 'dsnswc'],
    ['f', 1, 12, 'fffzffffffffff'],
    ['c', 1, 5, 'cqccvccczmccc'],
    ['x', 5, 19, 'lgrsxhlwzthdxtwfbvx'],
    ['t', 3, 10, 'xvhtznxhvgpx'],
    ['x', 3, 11, 'gvhxpjmwxtxmgqks'],
    ['b', 11, 13, 'rjvtlmntzpbbjprtlbb'],
    ['m', 1, 4, 'mmmm'],
    ['k', 5, 10, 'pkkgkkmnhk'],
    ['v', 2, 3, 'vvmv'],
    ['p', 12, 13, 'mppspppbfpgwp'],
    ['m', 1, 3, 'mmmpmmbm'],
    ['b', 4, 9, 'hzbjdbjxpxqbtlm'],
    ['p', 1, 4, 'ppppppppppppppp'],
    ['g', 4, 5, 'ggfgg'],
    ['j', 8, 11, 'dwjzgmgdcczhwc'],
    ['w', 6, 7, 'wwwwwwwww'],
    ['t', 3, 5, 'vtqwt'],
    ['k', 1, 5, 'kkhkkk'],
    ['c', 4, 7, 'ccvtcrcc'],
    ['l', 1, 10, 'vwknprttll'],
    ['x', 9, 11, 'htnnvnrtxdx'],
    ['r', 15, 17, 'rrrrxrrlrrrrrcrrs'],
    ['v', 2, 3, 'vsvvv'],
    ['g', 4, 15, 'mxjglqklwwjnksg'],
    ['c', 1, 2, 'ccdc'],
    ['l', 10, 16, 'ljrrlvtlrqglmgdf'],
    ['s', 3, 6, 'ssssblsdsb'],
    ['r', 5, 6, 'mrrrrtrr'],
    ['w', 13, 17, 'wwwwghwwtkwwrwwfx'],
    ['j', 4, 5, 'jjdjjzjjb'],
    ['s', 2, 3, 'ssjsss'],
    ['r', 8, 14, 'rrrrrrrrrrrrrrrrrr'],
    ['l', 7, 9, 'lllllllllll'],
    ['j', 15, 17, 'jjxjjjjjsjjjjjjjjjj'],
    ['r', 6, 8, 'hrrrcqrr'],
    ['w', 6, 7, 'wndbtqqmdw'],
    ['k', 4, 7, 'cktskgxmkk'],
    ['z', 3, 9, 'blkmxrzjhcp'],
    ['p', 10, 11, 'ppppppzpfmpt'],
    ['s', 8, 9, 'sssssssss'],
    ['l', 1, 5, 'zglfs'],
    ['s', 7, 8, 'mstsxsvsm'],
    ['z', 1, 4, 'zzzzrbvzwr'],
    ['g', 16, 17, 'ggggkgggggggggggggg'],
    ['j', 1, 2, 'jjjjjwjjzj'],
    ['m', 4, 18, 'zmmbvvsrcmmcmqmpwlm'],
    ['f', 11, 15, 'ffffffffffvfffq'],
    ['c', 5, 6, 'csvcccccc'],
    ['z', 1, 12, 'zzzzzgzzzzzbqz'],
    ['s', 17, 18, 'sssssssssssssssjns'],
    ['m', 6, 10, 'jmfztgfmml'],
    ['x', 5, 7, 'bnxxxrx'],
    ['p', 13, 16, 'ppppppppppppmpphp'],
    ['t', 11, 14, 'ttttttltttvttttx'],
    ['t', 13, 14, 'qttnscscgxttttt'],
    ['b', 4, 5, 'vzbhz'],
    ['r', 4, 7, 'tdrzrrfqrrrrrrb'],
    ['p', 15, 17, 'pppppppppppppppppp'],
    ['q', 9, 17, 'xgqqnxppgqjqsbqqqdnv'],
    ['t', 3, 15, 'hrrnrspnpkwcktg'],
    ['f', 3, 6, 'fffcxf'],
    ['n', 3, 8, 'nznvppnn'],
    ['z', 4, 6, 'lzksskczzjzz'],
    ['n', 6, 12, 'nnnnnsnnnnnwrn'],
    ['q', 11, 12, 'qqnqqqpqqqcqqqqs'],
    ['z', 5, 11, 'zzzzlzzzzzrzz'],
    ['z', 1, 5, 'zzzzz'],
    ['j', 4, 5, 'bsspj'],
    ['d', 18, 19, 'ptdpdjpsdpddhsddkwd'],
    ['k', 13, 16, 'kkkkkkkkkkkkfkkw'],
    ['s', 7, 9, 'zsssbssfs'],
    ['b', 15, 19, 'bbbbbbbbbbbbbbbbbbbb'],
    ['g', 1, 7, 'gngrmgb'],
    ['f', 1, 7, 'vgkmsrfgwlwqzvfk'],
    ['p', 7, 11, 'psfkppdwxdt'],
    ['p', 1, 12, 'hppbpppppppbpppppp'],
    ['d', 12, 13, 'xxzpkwgzcxddq'],
    ['k', 6, 7, 'ktkkkqk'],
    ['v', 8, 9, 'vvvvvvvvvfvv'],
    ['g', 9, 13, 'ggggggggggggzggg'],
    ['g', 6, 7, 'gggggggggggggggggg'],
    ['g', 6, 10, 'gqgggcgggf'],
    ['r', 3, 9, 'wdkkqwbrgpvnrmvqc'],
    ['x', 2, 4, 'xxsxjndqbd'],
    ['j', 13, 14, 'jjjjmjjsjjjjjj'],
    ['d', 12, 13, 'dddddddddddddd'],
    ['h', 3, 4, 'rqnbzh'],
    ['f', 2, 3, 'ftxhlhhpvdvnz'],
    ['g', 11, 17, 'hnkmggstgggbgvrggj'],
    ['c', 6, 7, 'cccccvc'],
    ['m', 3, 4, 'mmtm'],
    ['r', 2, 7, 'rhrrrrr'],
    ['l', 6, 14, 'wpzllljvxdsxblz'],
    ['b', 7, 8, 'wxbrbbbb'],
    ['q', 9, 12, 'qfqqqqqqlqqrqvq'],
    ['p', 11, 15, 'ppppppppppppppppppp'],
    ['l', 19, 20, 'vjbsvzclllslkmlslxml'],
    ['v', 4, 5, 'jvnbhkv'],
    ['j', 12, 16, 'jfjjjjjjjkjsjjjvjjj'],
    ['w', 3, 4, 'wwww'],
    ['v', 1, 4, 'kvnv'],
    ['r', 1, 5, 'hrrrdrrrrrrrrrrrr'],
    ['s', 18, 19, 'skwfsfqfmhfgkbsmsnj'],
    ['f', 3, 4, 'pfks'],
    ['p', 11, 12, 'ttpbsjfvxcdm'],
    ['d', 4, 8, 'vhdddgndrmddfdg'],
    ['j', 1, 3, 'sbjwgvvhvj'],
    ['l', 13, 20, 'gslclvrnllgljtljmlnn'],
    ['m', 9, 11, 'mmmmmmmjkmdrmmmm'],
    ['r', 8, 14, 'fmzrhrdssfmxkq'],
    ['f', 3, 9, 'rvfmskmdfk'],
    ['c', 3, 13, 'ccjcccccccccbc'],
    ['w', 15, 16, 'wwwwwwwwwwwwwwwww'],
    ['r', 4, 5, 'hrlnjk'],
    ['q', 5, 13, 'qqqqqqqqqqqqqqqq'],
    ['j', 15, 16, 'jjjjjjjjjjjjjjjjj'],
    ['p', 18, 19, 'mhsgkktbhpwvvqmppbmc'],
    ['g', 13, 15, 'vfjtrgrrkbstblz'],
    ['j', 12, 15, 'jjjjkczjjjjjjpjjjvjx'],
    ['b', 3, 4, 'dbbb'],
    ['s', 6, 7, 'sbssskssss'],
    ['p', 15, 16, 'jgppppsspppppgxwm'],
    ['f', 2, 11, 'hmhwwqcjdfk'],
    ['t', 4, 6, 'tttttqt'],
    ['r', 1, 8, 'vrrrrdqrrrrrrrrrrr'],
    ['v', 2, 5, 'lftqnpm'],
    ['h', 3, 4, 'fbzthx'],
    ['w', 2, 8, 'wwnpwwxwwwcwzwwr'],
    ['r', 1, 3, 'grrrr'],
    ['d', 12, 13, 'pvddxddtsqgdd'],
    ['w', 4, 18, 'vfsrcftqqllwqvqwhrgt'],
    ['w', 3, 11, 'wnwqmfxfgkcxhmgh'],
    ['l', 17, 18, 'lllllllllllllllllb'],
    ['x', 5, 6, 'rvfxxx'],
    ['n', 10, 11, 'nnnnnnnnnnnnn'],
    ['s', 1, 9, 'wshhwwsscxps'],
    ['k', 2, 12, 'bkvqsmzmjbckxvhtnkfb'],
    ['l', 7, 10, 'ltlsnlrllm'],
    ['n', 1, 5, 'nvnnn'],
    ['m', 2, 4, 'gmpmz'],
    ['k', 13, 19, 'kkkkwkkxkkkkpkfkkkq'],
    ['l', 6, 15, 'dlhlcllllrllllll'],
    ['q', 14, 15, 'qqqqfqcqqqqqqqsq'],
    ['z', 6, 7, 'qzzdtzzqzz'],
    ['v', 1, 4, 'pvvvkrgkvhmvvv'],
    ['b', 1, 3, 'bfbcjdmb'],
    ['b', 6, 9, 'gqbljxvmmbcbbkqgb'],
    ['v', 10, 12, 'vvvvmvvhdrzv'],
    ['t', 2, 3, 'tttt'],
    ['p', 9, 13, 'jlhnpxnppwnpplqp'],
    ['z', 3, 5, 'zdzcz'],
    ['b', 4, 19, 'bbbbbbbbbrgbbdbbbbb'],
    ['x', 9, 15, 'xxxxxxxxlxxxxxbx'],
    ['f', 1, 5, 'sfffmf'],
    ['w', 8, 12, 'lnlwfcwgtzhxlr'],
    ['c', 1, 3, 'cclrc'],
    ['p', 8, 12, 'jhkpfmltvpjpb'],
    ['m', 2, 8, 'jmnmhkrmqvwx'],
    ['p', 7, 9, 'pppppppndppp'],
    ['k', 7, 9, 'kkkmkkkdkks'],
    ['w', 4, 5, 'wwwwww'],
    ['j', 1, 3, 'pjjj'],
    ['z', 3, 4, 'xczz'],
    ['h', 5, 6, 'nhdlvq'],
    ['g', 4, 9, 'gggngrgtgggggg'],
    ['l', 6, 9, 'klllltllrlll'],
    ['k', 1, 3, 'mkkk'],
    ['b', 4, 11, 'hfbbbfccxbc'],
    ['w', 4, 10, 'wmhpzkswdwl'],
    ['h', 1, 2, 'kphh'],
    ['g', 10, 17, 'gggggggggggggggggggg'],
    ['g', 15, 19, 'gggmggggggggggggggg'],
    ['z', 2, 3, 'zqxl'],
    ['p', 8, 10, 'pppphpppppppp'],
    ['q', 2, 3, 'qhsqqqq'],
    ['v', 1, 4, 'vqtvvlnpwvvnv'],
    ['g', 16, 17, 'bgjpggsggggxggjgg'],
    ['p', 8, 9, 'kpskgpklpkprqrtpjkdh'],
    ['f', 8, 12, 'frxfhffpqqfw'],
    ['d', 3, 4, 'dswjddd'],
    ['t', 5, 9, 'ttwtttttdttttt'],
    ['q', 3, 5, 'qqqqq'],
    ['g', 2, 11, 'gggggggggggg'],
    ['d', 3, 15, 'tddxdddddddsdvdx'],
    ['d', 2, 3, 'dzmnd'],
    ['j', 4, 8, 'gjjjjjjvkbjcbxp'],
    ['l', 5, 18, 'djxdjmvntxwlnsftglr'],
    ['b', 3, 6, 'bbhbbbbbh'],
    ['k', 17, 20, 'kkzkkkkkrkkkkkkkhkkv'],
    ['f', 7, 9, 'fvffffzfnff'],
    ['t', 4, 10, 'tttkttttwwtt'],
    ['t', 3, 5, 'vttmpzqxqtqnz'],
    ['q', 8, 9, 'wkpkqsvvqmdq'],
    ['q', 3, 6, 'qhqqqq'],
    ['q', 3, 4, 'qdqqpph'],
    ['t', 2, 6, 'vrzktf'],
    ['n', 2, 3, 'nnnn'],
    ['t', 3, 4, 'tbtw'],
    ['v', 5, 12, 'zrwpjvpmxgncxknv'],
    ['r', 10, 12, 'rrrrgdrrrzrs'],
    ['k', 3, 4, 'qmmmbbnvvhvdwmfzk'],
    ['j', 5, 6, 'jqzvjjjxj'],
    ['v', 7, 13, 'vvvvvvvvvvvvkvv'],
    ['p', 7, 8, 'kpppphppph'],
    ['l', 6, 7, 'lzsfzlll'],
    ['m', 7, 9, 'mmmmmmgmn'],
    ['m', 3, 8, 'lmbxzdzrsq'],
    ['k', 14, 17, 'ckhdnjzmvhtvbktskrk'],
    ['d', 5, 10, 'ddpdpdjtnbdg'],
    ['v', 6, 8, 'vtfzlwgdffhf'],
    ['n', 7, 8, 'nkvnjsrnn'],
    ['p', 2, 5, 'ppkppp'],
    ['p', 2, 3, 'nppgpbr'],
    ['k', 1, 3, 'dklkkkkkkkk'],
    ['x', 1, 2, 'xxxx'],
    ['d', 2, 4, 'dpdtddd'],
    ['p', 4, 5, 'mlhpphxphv'],
    ['x', 14, 15, 'xxdxdwkxxvbxwcxxx'],
    ['f', 10, 11, 'jdfsmfxffffwfrfffhj'],
    ['l', 3, 9, 'llbgcfzlnz'],
    ['h', 13, 14, 'chhhhwhmqhhjhh'],
    ['g', 3, 4, 'gmgkggg'],
    ['q', 6, 7, 'qprdhdwsjnblqnkgf'],
    ['r', 9, 10, 'rrrrwprhrr'],
    ['g', 2, 5, 'jbjgl'],
    ['x', 7, 8, 'xxxxxxnl'],
    ['q', 7, 8, 'qqqqqqgr'],
    ['v', 3, 4, 'vvvsv'],
    ['w', 3, 4, 'wwhnjwwgw'],
    ['f', 1, 8, 'mdqfrxfwfcf'],
    ['v', 2, 4, 'gvhvwkvhfs'],
    ['d', 15, 16, 'dcddddddddddddqnddd'],
    ['v', 13, 14, 'kvkvvvzvshfkvpzvvvp'],
    ['z', 17, 19, 'zzzzzzzzzzzzzzzzrzqz'],
    ['k', 6, 8, 'kmkkkfgkkk'],
    ['v', 12, 16, 'svxtcjxgdmkvqjfvzln'],
    ['p', 4, 10, 'gljwppnhpc'],
    ['c', 8, 15, 'ccccccccccccccccc'],
    ['w', 1, 5, 'wwwwwwww'],
    ['w', 3, 9, 'jwqgswwbtwwswwq'],
    ['t', 2, 18, 'ptblkjvmjwglftpblr'],
    ['n', 8, 11, 'hznznmrvjnm'],
    ['q', 5, 6, 'qqqwrqq'],
    ['s', 4, 10, 'scjssfsfcs'],
    ['p', 3, 7, 'pppprpplpppzp'],
    ['z', 6, 7, 'zzzzzpwzz'],
    ['h', 1, 4, 'hhhh'],
    ['r', 14, 16, 'rcrprqrxrrlrjrlrrrlr'],
    ['x', 4, 6, 'xxxlxjxx'],
    ['j', 8, 10, 'jjjjjjjqjcj'],
    ['f', 10, 13, 'ffffffffftfff'],
    ['r', 8, 9, 'rqrzrjhrr'],
    ['m', 7, 11, 'tmfmhvmmpkmp'],
    ['h', 4, 7, 'bjhhlhhh'],
    ['l', 2, 3, 'lwll'],
    ['s', 10, 11, 'jssssssssssssssssz'],
    ['p', 13, 14, 'splrwgnphqclrmqf'],
    ['j', 9, 11, 'jsjjjjltjjjjjzpjjdj'],
    ['g', 3, 4, 'gpcwhg'],
    ['s', 5, 7, 'ssbsssssss'],
    ['w', 5, 8, 'bgwbjwwnwwwvww'],
    ['f', 9, 11, 'fjcgtktnfpfxrqg'],
    ['j', 2, 9, 'xgmdjfzsfhf'],
    ['f', 12, 15, 'hkcgtffnzcffffffxdjb'],
    ['k', 5, 10, 'kxggklgdrjz'],
    ['b', 6, 8, 'bxbbbbbbb'],
    ['m', 4, 10, 'tmqfmmmmmm'],
    ['g', 3, 5, 'svtqgh'],
    ['s', 9, 17, 'ssqssdrsstspssjssj'],
    ['s', 9, 11, 'dssssssssslss'],
    ['k', 1, 4, 'kckkqdkkmg'],
    ['w', 3, 4, 'zbhwmkgqfqstwdwhs'],
    ['j', 1, 2, 'jjjjnjj'],
    ['w', 10, 14, 'rlwpdltwwtzdmnwgmdw'],
    ['j', 3, 4, 'bjnx'],
    ['n', 14, 18, 'nrnrnhnjnfwnnnnnrln'],
    ['g', 8, 11, 'gvhwsbhghdgg'],
    ['h', 15, 16, 'hghhhhhhhhhhhhht'],
    ['x', 2, 12, 'xhxxxxxxxxxkxxx'],
    ['n', 8, 13, 'xqnrnndtnznnkxb'],
    ['t', 3, 6, 'rbnxbjw'],
    ['v', 6, 7, 'vdfmjxvvv'],
    ['x', 1, 13, 'xxxxxxxxxxxxxxxxxxx'],
    ['m', 3, 9, 'mmmmmmmqmmmm'],
    ['d', 4, 6, 'dddcdkddddcdgvzd'],
    ['w', 5, 6, 'wwgwwhw'],
    ['h', 9, 12, 'lmmwfqczxchc'],
    ['x', 12, 15, 'xgpxxstxxxxxxxsrxz'],
    ['c', 6, 10, 'wsnftlccckchtlqjhmt'],
    ['f', 8, 9, 'ffffffzbd'],
    ['z', 7, 10, 'zzzzbzhzzgzzzzzpzd'],
    ['c', 2, 7, 'pccxccc'],
    ['l', 3, 10, 'zlkmbdffdrhcwsc'],
    ['x', 5, 6, 'xxxmxx'],
    ['b', 15, 16, 'bbbbbbbbbbbbbbjtbbbf'],
    ['m', 4, 6, 'lmmtnmrqwgmqmmmmw'],
    ['j', 7, 15, 'jmpjrjjthvwjcljvnz'],
    ['z', 1, 2, 'gqzj'],
    ['h', 1, 6, 'hhhwhh'],
    ['m', 2, 3, 'mzkm'],
    ['z', 7, 9, 'zzhczvztz'],
    ['w', 6, 7, 'vhkgmcwwjwgw'],
    ['l', 2, 3, 'lsllllplllljlll'],
    ['r', 3, 4, 'mvmr'],
    ['h', 10, 12, 'hzbvhdfwthhhhjwhr'],
    ['x', 7, 11, 'gstsnxjzhsmlnnwdcmt'],
    ['g', 12, 13, 'pjmjghprgnxggf'],
    ['m', 3, 4, 'rfmm'],
    ['d', 6, 14, 'tsdlsjprjndfndhdmzhz'],
    ['b', 2, 6, 'ppbbmhc'],
    ['j', 3, 4, 'jjrkj'],
    ['d', 2, 4, 'ddwd'],
    ['h', 2, 3, 'mblfdbbkdjhhtm'],
    ['q', 4, 5, 'qtqnd'],
    ['g', 2, 6, 'ggggggg'],
    ['c', 3, 4, 'cczdc'],
    ['k', 13, 16, 'kvbgnklxkkwxkqlk'],
    ['p', 2, 7, 'qphjpkpmzfpzlppw'],
    ['c', 5, 8, 'ccccbccnc'],
    ['k', 2, 10, 'kkkkkkkkkkk'],
    ['x', 15, 16, 'xjxpxjxdkxlxfjqj'],
    ['j', 11, 15, 'njjjsjjjjjcbjjt'],
    ['z', 1, 3, 'mzzfz'],
    ['f', 1, 5, 'fffffffffff'],
    ['v', 3, 7, 'jvvwmjvjm'],
    ['r', 2, 5, 'vrrkrrxfqrmv'],
    ['v', 15, 16, 'sbvnlvvdvrbrwvvq'],
    ['g', 3, 7, 'bwghkwggfm'],
    ['v', 7, 9, 'vvvvvvvvjvv'],
    ['m', 3, 7, 'gmmmmktmmb'],
    ['t', 6, 12, 'mtbmttttkfth'],
    ['c', 5, 9, 'ccpfchzpcdxcml'],
    ['d', 9, 13, 'ddddddddbdddld'],
    ['g', 2, 3, 'nrkg'],
    ['m', 4, 8, 'mqnpqmxmq'],
    ['p', 2, 4, 'pnpqpf'],
    ['p', 16, 19, 'ppppppppppppppprppzp'],
    ['j', 3, 6, 'jjjlmf'],
    ['k', 1, 6, 'kbnpkkckwktwwqkcff'],
    ['z', 1, 4, 'hzzg'],
    ['b', 5, 7, 'bbbbbbbbbbbbbbsq'],
    ['z', 2, 12, 'zwzzzzzzhzzzzzzzz'],
    ['x', 6, 11, 'nddhcxbtgsxxcq'],
    ['k', 3, 5, 'gkktkkh'],
    ['f', 2, 8, 'wfnbhxlfstfwxrkhdxj'],
    ['r', 5, 6, 'zcrrrr'],
    ['p', 1, 2, 'dqjjwqjnqp'],
    ['g', 4, 9, 'ggngjgggbggvg'],
    ['m', 3, 6, 'mmsmcjmmmmmmmmmm'],
    ['c', 3, 17, 'qvczjdtppwlvclclcw'],
    ['k', 8, 9, 'kkkkkkkwdkkk'],
    ['d', 5, 7, 'gddnldkddd'],
    ['h', 5, 9, 'whkhvhrshllhldphhn'],
    ['q', 11, 17, 'qqqqqzqqqqcqqqqqdqqq'],
    ['k', 5, 6, 'fjszvkzmhshdd'],
    ['k', 6, 8, 'kkkkkkzk'],
    ['j', 11, 13, 'jjjjjjjjjjjjjjj'],
    ['q', 4, 10, 'slwqqsqkbqqb'],
    ['s', 7, 8, 'cvwvzswq'],
    ['c', 10, 14, 'tvhxzvpdcckdzc'],
    ['p', 1, 5, 'jpppppp'],
    ['g', 12, 15, 'spggvdggsmfhggg'],
    ['n', 5, 11, 'zlgnqkkqlhmrgn'],
    ['j', 11, 18, 'zrjgljjljjjzjhjkrj'],
    ['t', 10, 14, 'tttttttktdttttttcdtt'],
    ['p', 10, 11, 'szxpqprpchkwvwqqk'],
    ['t', 9, 14, 'ttttttgtmtfmttttttt'],
    ['n', 10, 15, 'nnnnnnnznbpnnnxn'],
    ['l', 1, 4, 'lllll'],
    ['w', 4, 5, 'wbhhjpwbbft'],
    ['r', 10, 12, 'rhrrlcrlrrmrrrwlrbx'],
    ['g', 13, 14, 'ggggggggggggggggg'],
    ['f', 7, 9, 'fvvwfffff'],
    ['n', 9, 15, 'pnnnnnnnlndnnnnnnnn'],
    ['b', 5, 7, 'bbbbbbbb'],
    ['v', 8, 15, 'ldhwnvvwtxbskzvk'],
    ['t', 10, 15, 'tgkkgtfttxtttqbtttv'],
    ['s', 5, 15, 'hlsfskvqssskxds'],
    ['g', 2, 7, 'wlnqrrdw'],
    ['w', 8, 9, 'mwpbdlmmj'],
    ['h', 5, 11, 'lclzlhhhhfvrrrzvnkfz'],
    ['c', 8, 9, 'jcwdnxgnv'],
    ['h', 1, 6, 'dchmhm'],
    ['s', 9, 14, 'ssbdsvccsxtpnszv'],
    ['d', 3, 5, 'dddddd'],
    ['w', 1, 6, 'vwwwwf'],
    ['f', 5, 6, 'lrffxb'],
    ['n', 16, 17, 'nnnnnnnnnnnnwnnnnnnn'],
    ['x', 4, 5, 'qlxjptn'],
    ['d', 4, 5, 'ndddd'],
    ['r', 1, 9, 'zrrrrrcrr'],
    ['r', 4, 5, 'brnrr'],
    ['r', 15, 16, 'rrrrrrrrrrrrrrhrrrrr'],
    ['w', 4, 8, 'wwvdwwwwwww'],
    ['f', 12, 14, 'ffffffdffffpfhfdg'],
    ['h', 3, 9, 'srhvhkvsv'],
    ['j', 17, 18, 'jzjjjjjsjjjjjjjjjj'],
    ['t', 4, 8, 'lvpttpct'],
    ['t', 2, 3, 'ttqt'],
    ['v', 3, 11, 'wpvmlbvbpvs'],
    ['x', 10, 11, 'vrkmmglwxxxsxsnxf'],
    ['k', 4, 7, 'kkkkkkk'],
    ['k', 3, 5, 'kkkkkkk'],
    ['v', 13, 18, 'rkvvvlkzhvvmbgvvvk'],
    ['p', 1, 2, 'prpppg'],
    ['c', 8, 11, 'cxkchzcchccdzqfc'],
    ['z', 1, 6, 'zzwzzz'],
    ['z', 3, 4, 'czpdt'],
    ['d', 11, 12, 'ddddddddddddc'],
    ['l', 6, 8, 'llldlkvzll'],
    ['n', 5, 15, 'wngptdmbvqftdvw'],
    ['j', 10, 12, 'qjxmgghlbklxcpd'],
    ['z', 4, 6, 'mdhzpzlw'],
    ['c', 11, 13, 'cccccczgccccccccccc'],
    ['z', 5, 10, 'zzzzxzzzzvzzzzmz'],
    ['c', 7, 14, 'frhncvjxdcccbg'],
    ['g', 12, 19, 'gggggggggggggggggggg'],
    ['n', 12, 13, 'nwsknnnnnnnnnqtnnxn'],
    ['d', 11, 12, 'ddpddddnrddw'],
    ['s', 8, 9, 'bssssfsss'],
    ['t', 1, 2, 'ttttttttttt'],
    ['b', 8, 10, 'bbbbbbbrbfbbb'],
    ['c', 3, 7, 'jwtdcccgj'],
    ['j', 4, 5, 'djjjjhm'],
    ['v', 2, 7, 'snsflvvrf'],
    ['q', 6, 15, 'qqqqvrqqqqqqqqkqq'],
    ['q', 8, 12, 'wbqqxvflbqxqzq'],
    ['t', 9, 15, 'tttttztttjwdtsttpw'],
    ['l', 1, 8, 'lllllllll'],
    ['f', 7, 12, 'fffffffffffsf'],
    ['m', 4, 5, 'lklqm'],
    ['t', 13, 15, 'trtttttttthtgtt'],
    ['q', 4, 5, 'qqqqqqqqq'],
    ['r', 1, 10, 'prrrrrrrrhr'],
    ['d', 2, 5, 'cprddmdhdvd'],
    ['s', 5, 6, 'qsrxss'],
    ['q', 4, 5, 'vwlvqqrplzqs'],
    ['d', 14, 18, 'ddddddddlddddwdddgv'],
    ['p', 2, 5, 'ppmqxptpp'],
    ['w', 12, 13, 'wwwwwwwwkwwjtwww'],
    ['f', 6, 7, 'spfffsnzc'],
    ['s', 9, 16, 'zdmsgmcbspjtwsdspwvs'],
    ['z', 11, 17, 'zzzzzzzzzzzzzzzzzz'],
    ['j', 11, 16, 'jjjtjjcjjjbjbldv'],
    ['b', 6, 12, 'bbbbbbbbjbbbbb'],
    ['c', 4, 7, 'cccgcctc'],
    ['f', 3, 4, 'fffjhf'],
    ['g', 10, 19, 'ggjgggggjdggkgglggg'],
    ['x', 1, 13, 'xvqpxzmjjxklx'],
    ['k', 6, 8, 'kkkkkkkd'],
    ['r', 7, 11, 'rhfrxrrttnrfrgqphr'],
    ['w', 10, 11, 'hwwwwwncqwpwqwfvzww'],
    ['h', 3, 4, 'hhmhh'],
    ['n', 1, 5, 'zncnnwhcnqj'],
    ['m', 3, 10, 'mmcmmmmlmcmmmmm'],
    ['j', 1, 5, 'jjljx'],
    ['b', 5, 8, 'bbbbbbbbbb'],
    ['x', 3, 4, 'bvxxxxn'],
    ['b', 1, 3, 'bfkbbbb'],
    ['m', 2, 7, 'mjmmmmmm'],
    ['n', 4, 7, 'znnnnnnn'],
    ['h', 12, 14, 'kvlxhkdqbvwhhh'],
    ['q', 11, 12, 'qlgqqqqdmqqqqqqsqn'],
    ['p', 2, 5, 'pppppppvptvw'],
    ['c', 4, 5, 'ccccccvr'],
    ['b', 1, 5, 'xbqbn'],
    ['p', 7, 8, 'pxnddnpgsp'],
    ['j', 2, 3, 'nxxjs'],
    ['j', 1, 4, 'vtdfk'],
    ['l', 7, 12, 'mlcdlklmpbjl'],
    ['l', 4, 6, 'lqgrml'],
    ['v', 12, 14, 'vfplrnnvhlvhzk'],
    ['x', 2, 5, 'xjkxbxxx'],
    ['v', 10, 12, 'vvvvgvfjwvvjvvv'],
    ['w', 1, 3, 'brprgblcpwhhp'],
    ['n', 3, 8, 'nzdnnnnnnnvznnnnx'],
    ['p', 3, 6, 'dghpfthx'],
    ['r', 8, 9, 'frrrrrrmj'],
    ['c', 12, 13, 'wnmxtcqqgcdcdpp'],
    ['p', 1, 3, 'zpsp'],
    ['z', 11, 12, 'zpzwzzszmgzgvztdzmrz'],
    ['d', 15, 16, 'dxdqddddrdddddzzd'],
    ['g', 4, 15, 'gbgrsgggjgggqdvnhggg'],
    ['j', 3, 4, 'vjjmpl'],
    ['b', 17, 18, 'bbbbbbbbbbbbbbbbbbb'],
    ['h', 14, 17, 'vzhhhpqhqbgvghckh'],
    ['w', 6, 16, 'wlwdwvwwbwwxwwwv'],
    ['x', 3, 4, 'cxgj'],
    ['t', 10, 12, 'ttjttztlgrtbttst'],
    ['x', 16, 17, 'xtxxrxxxgxxxbqxfr'],
    ['j', 8, 12, 'gjnnbxhgcgpd'],
    ['b', 3, 4, 'pkkbfb'],
    ['g', 2, 3, 'gggmgwgggggggghggg'],
    ['z', 8, 10, 'zzzszzpjmzzzz'],
    ['r', 10, 11, 'xbrkrjcsrtmrgtrrm'],
    ['n', 6, 7, 'blmcznpnsbsw'],
    ['n', 3, 4, 'nwzqznxn'],
    ['j', 6, 9, 'jnjhvjxjjzc'],
    ['d', 4, 5, 'qrddth'],
    ['p', 1, 4, 'pphp'],
    ['j', 9, 10, 'mhxwjjjbjj'],
    ['l', 5, 6, 'llcllc'],
    ['t', 1, 3, 'rtrttvtttttt'],
    ['c', 2, 14, 'ccxccccfgcdccctbzgqc'],
    ['k', 3, 7, 'kkrkkkq'],
    ['z', 5, 10, 'zzzdqkzzgstqzzzz'],
    ['w', 1, 3, 'pjbt'],
    ['m', 6, 10, 'dlmsmrmmmmxmrmmmm'],
    ['v', 1, 4, 'qvlsm'],
    ['d', 11, 19, 'ddddddddddkdddddddpd'],
    ['s', 2, 3, 'gsknvsrcwfbxnk'],
    ['q', 9, 13, 'lvpvdqvzqndtbsrwjf'],
    ['n', 2, 6, 'sjspfczdsnt'],
    ['c', 2, 4, 'cccw'],
    ['x', 8, 10, 'xqhcxzxxxxfdx'],
    ['l', 3, 7, 'llltwlll'],
    ['m', 2, 4, 'khqmnm'],
    ['j', 3, 12, 'jvshgpptttfgkrnwf'],
    ['k', 11, 12, 'kkkkkkpdkkkk'],
    ['d', 1, 2, 'fcdd'],
    ['l', 11, 12, 'dpnxdjhclqllqsd'],
    ['p', 8, 9, 'tnphpwrppgm'],
    ['c', 6, 7, 'frhvcll'],
    ['x', 4, 9, 'xxxxxxxxxx'],
    ['n', 3, 4, 'znnn'],
    ['h', 2, 3, 'hmjw'],
    ['m', 7, 8, 'qvtpmwmm'],
    ['c', 10, 12, 'hbccgmvbhgccck'],
    ['j', 6, 7, 'jjjjgjjjjjjjjjjj'],
    ['m', 3, 6, 'rmrdgddjtmm'],
    ['h', 9, 10, 'hhhhhhhhhhh'],
    ['w', 9, 16, 'fwwwnmkwwjwcszwb'],
    ['v', 3, 10, 'wkvxpxjcsvqgv'],
    ['s', 11, 18, 'ssssssssssqssssssvs'],
    ['v', 5, 14, 'bxbkvfvnvnvvwf'],
    ['k', 11, 13, 'kdbkwbpkwjkkk'],
    ['n', 4, 7, 'ncnnkvnnn'],
    ['q', 6, 9, 'qxmvqmpqqdqsqjkhqq'],
    ['p', 6, 8, 'ppppppspfpp'],
    ['w', 7, 8, 'wwwhcsttd'],
    ['t', 18, 20, 'tlrzstttttrttdmxhxtt'],
    ['h', 10, 11, 'hhxzchbhhhshhbhv'],
    ['h', 14, 17, 'jbfhhthndhwkhhbhh'],
    ['t', 12, 13, 'tltttctbpmztrxnf'],
    ['w', 4, 15, 'mbgcvdvhhwbpckxwsw'],
    ['r', 4, 5, 'rrrrrlrvzrrhkr'],
    ['q', 1, 3, 'qplqqdqqqqqvmqz'],
    ['r', 6, 8, 'rvmrrftw'],
    ['c', 1, 2, 'cczcrncddc'],
    ['j', 4, 7, 'cjrbtlkxj'],
    ['t', 2, 5, 'httgxlxfdskjgmdk'],
    ['z', 4, 6, 'jtzzlv'],
    ['d', 8, 9, 'ndndddddd'],
    ['f', 5, 12, 'ncmjfbkmzxmfxfvnfnbw'],
    ['z', 2, 5, 'zzfnz'],
    ['d', 1, 6, 'sdddpr'],
    ['v', 12, 14, 'vdvvvvvvvvvkvvv'],
    ['m', 11, 15, 'jtgmzcmmmxnpvrtmmm'],
    ['d', 3, 8, 'vqtddpdqdfddhcd'],
    ['l', 4, 5, 'llplr'],
    ['f', 2, 4, 'fcfzh'],
    ['v', 3, 6, 'lbvklvp'],
    ['k', 15, 16, 'kkkkkkkkkkkkkkkkk'],
    ['c', 6, 7, 'ccccccccc'],
    ['h', 11, 16, 'hhhhhhhhhhhhhhhsh'],
    ['l', 12, 14, 'llllllwllllllllllll'],
    ['v', 11, 12, 'bvslvwvzgwnv'],
    ['l', 4, 5, 'xllllll'],
    ['c', 2, 3, 'xccc'],
    ['j', 7, 17, 'jjjjjjjjjjjjjjxjdjjj'],
    ['w', 18, 19, 'wrwwwwwxwwplwhwwwww'],
    ['z', 4, 5, 'tzzncf'],
    ['g', 1, 2, 'gpgswkqsnxxkn'],
    ['f', 10, 12, 'xpfffrxfqfcfff'],
    ['r', 14, 16, 'rrrrrrrzxrrrrrrr'],
    ['d', 8, 17, 'dddddddddddddddddd'],
    ['j', 7, 11, 'kjvjgbjqkwjjjs'],
    ['x', 7, 11, 'xxxxxxxxxxxxxx'],
    ['d', 13, 16, 'cddddddgddddrddgdzd'],
    ['x', 11, 15, 'xhpxxxxxxbktlxr'],
    ['p', 5, 19, 'ppkpsnhkpttdqpvlhzp'],
    ['f', 10, 14, 'xcfzqffcnfprzf'],
    ['c', 3, 17, 'bdcmfmcptmhqczphc'],
    ['d', 1, 12, 'ddddddddddmd'],
    ['h', 6, 7, 'nnbphmjb'],
    ['w', 14, 15, 'dmlvwvxwgcvfgwwl'],
    ['v', 7, 8, 'qlvvvgjrcvwvvlszgvc'],
    ['c', 2, 4, 'ncrc'],
    ['q', 5, 7, 'qqmtqqqx'],
    ['c', 13, 14, 'pcnbccwtcczcccg'],
    ['t', 1, 5, 'dpgtlsw'],
    ['f', 12, 13, 'zrcqtjjqjfrqp'],
    ['n', 6, 12, 'mbhwrnnxzzjnlrmm'],
    ['v', 5, 7, 'rvtrvhvtnvmvvmdv'],
    ['g', 9, 14, 'ggggggggfggggl'],
    ['q', 1, 13, 'gqqqgqqqqqqqpqq'],
    ['k', 8, 15, 'tkdkdrgkdkktkrkdk'],
    ['m', 9, 11, 'mpvmldmmbmj'],
    ['c', 2, 6, 'chcccgclcrcc'],
    ['l', 5, 7, 'llllhlllll'],
    ['g', 11, 12, 'ggggggggggggg'],
    ['x', 2, 3, 'bvcx'],
    ['b', 11, 14, 'bbbbbbbbbqbsbb'],
    ['x', 3, 6, 'xxxxxxx'],
    ['g', 9, 16, 'bgggvwjhgmggpqjgv'],
    ['n', 6, 9, 'ngsdrnnnknxgqdn'],
    ['x', 5, 6, 'btjbxx'],
    ['t', 9, 11, 'ttttctttdtktttt'],
    ['s', 6, 7, 'ncxcsds'],
    ['s', 5, 17, 'ssssssssssssssssss'],
    ['t', 3, 8, 'ctdvrttftptt'],
    ['j', 9, 10, 'fllmfjqjtqjjjtjgjjj'],
    ['z', 9, 13, 'qzzhdznqfxrrrpw'],
    ['k', 4, 6, 'hhkkqkwkk'],
    ['q', 12, 13, 'qqdqqsqrrqqnx'],
    ['j', 4, 6, 'hjtbnnfbhqbd'],
    ['w', 3, 10, 'wwcqtplgdwzc'],
    ['d', 11, 13, 'wdxddddcdvddddd'],
    ['d', 3, 6, 'rcxlqm'],
    ['w', 7, 8, 'wgcpwnxldswgc'],
    ['p', 6, 10, 'pppppbpppwp'],
    ['w', 5, 10, 'wbfwdgwfzrrlwft'],
    ['c', 10, 11, 'ccccccccccbp'],
    ['q', 3, 6, 'qqtqqbqq'],
    ['k', 12, 15, 'kkkkkkkkkkkkkkk'],
    ['x', 12, 15, 'xxxxxxxxxxxxxxxx'],
    ['x', 3, 16, 'xvlxmxnnxxxkxxxj'],
    ['z', 3, 13, 'zfzxglzkhzrbzpzdtn'],
    ['f', 6, 14, 'mfffflfffffffzfff'],
    ['m', 10, 12, 'lnnkhjthrndmcj'],
    ['k', 12, 13, 'kkkkkkkkqkkjbk'],
    ['c', 3, 4, 'kzcz'],
    ['h', 3, 4, 'phhhl'],
    ['n', 5, 15, 'nnnnnbnsnnnnnnqnnnn'],
    ['v', 12, 16, 'zvccvkvcfvplvvcx'],
    ['z', 1, 3, 'qzzzz'],
    ['p', 2, 3, 'fjzkvmcsp'],
    ['c', 8, 10, 'rccdvcckkcc'],
    ['l', 3, 11, 'lllllllnlll'],
    ['w', 5, 8, 'wwwdffwwwwgvwf'],
    ['z', 9, 11, 'kjzrzzkhlzpzzzzzznl'],
    ['t', 9, 16, 'ttttttttdttttttqttt'],
    ['s', 14, 15, 'sfsfzlshbskndfcz'],
    ['k', 6, 8, 'kkkkkkkkk'],
    ['k', 2, 4, 'wpck'],
    ['v', 8, 9, 'gtmcmvkvzbcrgvc'],
    ['v', 6, 10, 'vvvvvmvvvvv'],
    ['h', 10, 11, 'lhhhxhhhvwmmghfwk'],
    ['w', 8, 11, 'wwwwwwwfwwlww'],
    ['b', 5, 17, 'bbbbbbbbbbbbbbbbbb'],
    ['j', 4, 11, 'jjjjjjjjjjjj'],
    ['p', 7, 13, 'mpppppnnpppptcppp'],
    ['w', 10, 11, 'wwwwwxwwmvwww'],
    ['n', 6, 8, 'nmnsnknt'],
    ['z', 1, 7, 'zzzzzhzzzb'],
    ['v', 2, 6, 'kccntgvhvggvdfnq'],
    ['g', 16, 17, 'gggggggggggggggxgg'],
    ['v', 6, 8, 'brvpfvgvpvvgjpzq'],
    ['w', 2, 10, 'sgnqldnccv'],
    ['z', 3, 4, 'dzxkzzszzrpdgx'],
    ['q', 7, 10, 'qqqtqqmqqqqq'],
    ['x', 4, 9, 'xxxnxwxxjxxxx'],
    ['d', 10, 12, 'ddddddddqddq'],
    ['z', 7, 8, 'zrzzzzzs'],
    ['w', 1, 19, 'wwwwwwwwwwwwwwwwwww'],
    ['l', 3, 4, 'jqxlf'],
    ['t', 13, 15, 'ctbllrttmtqttxt'],
    ['p', 12, 13, 'ppbppppqfppts'],
    ['p', 6, 11, 'pklpppljpcpgdpv'],
    ['s', 8, 9, 'ssstsssss'],
    ['t', 13, 16, 'ttttkvmttntwtpft'],
    ['x', 5, 8, 'xkvxfxxpg'],
    ['s', 2, 18, 'fgfrrxjqfrxskgkqvj'],
    ['v', 1, 4, 'fwmlrv'],
    ['x', 9, 10, 'xxxxxxxxxxx'],
    ['f', 6, 13, 'wbwctctbsptfj'],
    ['n', 4, 13, 'nnnnnnnnnnnnrn'],
    ['n', 8, 9, 'nmnsnnmnnlhlhvjx'],
    ['g', 12, 14, 'gggggggggggczv'],
    ['r', 5, 8, 'rzqrrrrkzhr'],
    ['k', 12, 17, 'kkkkkhkkkkxkkkkbkk'],
    ['h', 6, 8, 'hhhhhhhqqmhh'],
    ['h', 1, 3, 'dhmmghrhthhhvqpthf'],
    ['t', 3, 4, 'ttkft'],
    ['w', 3, 6, 'fwnwwgqq'],
    ['h', 8, 9, 'whpwkhbhh'],
    ['k', 9, 10, 'kkkkkkksbxk'],
    ['k', 4, 6, 'qfkkrkwr'],
    ['l', 3, 6, 'flllgl'],
    ['z', 6, 7, 'zzzzzqmzzzzzz'],
    ['h', 2, 3, 'zhhzh'],
    ['t', 4, 9, 'gvqnsttftcd'],
    ['c', 3, 6, 'zcbcsktcmhrkgc'],
    ['m', 5, 8, 'zmqmmmmmmmmmmf'],
    ['c', 1, 2, 'ccvcc'],
    ['s', 7, 9, 'ssssssjstsssssssssss'],
    ['t', 12, 19, 'ttftttttpnkttttttwt'],
    ['m', 5, 6, 'lpqmmmfmvzb'],
    ['d', 9, 11, 'ddddddddvdldd'],
    ['k', 7, 9, 'kkkkkkkkk'],
    ['l', 12, 15, 'lllllllllllpllllll'],
    ['b', 1, 4, 'kzbbb'],
    ['b', 18, 19, 'bxvlzxjgzbdbwfrjhvv'],
    ['w', 2, 9, 'whwwwnwwcwwwwwww'],
    ['f', 4, 11, 'ffffffffsff'],
    ['v', 5, 6, 'fhvcvv'],
    ['m', 1, 5, 'qqmpfmm'],
    ['m', 6, 8, 'mmmmkvvhmcmmmmm'],
    ['c', 2, 6, 'gcpvrcfhpsrpbtffnwk'],
    ['q', 5, 6, 'sqkfqq'],
    ['p', 3, 4, 'mbqppdqkdgkbf'],
    ['b', 8, 11, 'bbbbbbbtbbpbbb'],
    ['g', 5, 6, 'lmggqm'],
    ['q', 3, 7, 'hnqhnqq'],
    ['r', 2, 4, 'rrrlrd'],
    ['r', 7, 8, 'rrrbrlrr'],
    ['j', 5, 9, 'jjjdqjjjjjjjqjjckg'],
    ['l', 6, 7, 'lllwpll'],
    ['w', 1, 4, 'wxswwkw'],
    ['w', 17, 18, 'wnxxmrvqmcgmntpfxnh'],
    ['c', 1, 5, 'ccccc'],
    ['v', 4, 8, 'vvxvvvvw'],
    ['p', 8, 9, 'pppppppmpppp'],
    ['z', 1, 7, 'zzzzzzmzzz'],
    ['q', 10, 12, 'qqqqqqqqqssmqq'],
    ['x', 2, 5, 'mxxnv'],
    ['r', 4, 19, 'rrrlrrrrrrrzfrlrrrfr'],
    ['k', 4, 8, 'kkkkkpxk'],
    ['r', 5, 7, 'rfrqfbrrjv'],
    ['h', 3, 6, 'hsvkkw'],
    ['w', 2, 5, 'nwsfw'],
    ['q', 2, 5, 'hqstqgq'],
    ['n', 6, 15, 'mbmtgnvfzjnnjgnn'],
    ['f', 1, 2, 'fffffff'],
    ['v', 1, 7, 'vzvvvvvvxvvrrnzvv'],
    ['h', 3, 9, 'whhhhhhhhhhnhhh'],
    ['g', 11, 15, 'cgxhgsggnggrkgv'],
    ['m', 5, 6, 'mmmmmmm'],
    ['k', 14, 19, 'qkkkcvqjkklhkkkktkk'],
    ['r', 2, 8, 'fcrrqrrgrrrrrrlr'],
    ['l', 1, 2, 'lllvl'],
    ['c', 17, 18, 'vmcbkchcdktrnxccht'],
    ['l', 10, 14, 'klwzklwmllccql'],
    ['g', 4, 7, 'xgfggwg'],
    ['s', 2, 4, 'trhz'],
    ['j', 3, 5, 'lzfglwfbsqj'],
    ['p', 4, 5, 'stnprtpzszfc'],
    ['p', 9, 13, 'pppnppppjtsppc'],
    ['r', 6, 16, 'rxrrrrrrrdrbrrlrh'],
    ['c', 10, 11, 'ccccvclccrl'],
    ['l', 8, 9, 'nlglpwlqxl'],
    ['x', 10, 11, 'xxxxxxxgsxx'],
    ['z', 7, 8, 'zzzzszzlzwzzzzzzzz'],
    ['q', 1, 5, 'qqnbc'],
    ['v', 2, 3, 'jvvvv'],
    ['f', 2, 6, 'btdfbcfnk'],
    ['w', 8, 10, 'wlwnbwwblmww'],
    ['v', 3, 13, 'brwmcxvlptbdvchwkjp'],
    ['w', 8, 9, 'gwwwwwwbr'],
    ['k', 2, 11, 'pkhzsvjbhkk'],
    ['g', 6, 7, 'gggggmb'],
    ['g', 6, 7, 'gggggggg'],
    ['q', 7, 16, 'cqxfqzqnqvmkkhjqdr'],
    ['r', 1, 13, 'rrrrrrrrlrrrrrr'],
    ['x', 10, 14, 'xxxxxxxxxqxxxxxxxxxx'],
    ['l', 4, 5, 'llllp'],
    ['c', 1, 3, 'wccc'],
    ['k', 5, 11, 'kkfgkkkkkkkkqhk'],
    ['n', 2, 7, 'lnnjcks'],
    ['s', 12, 14, 'sssssssssssssss'],
    ['q', 1, 16, 'qqqqqqqqqqqqqqqzq'],
    ['n', 2, 3, 'nnnn'],
    ['m', 8, 20, 'vrtvfghfmskclmlmbwmm'],
    ['n', 2, 4, 'nnwn'],
    ['d', 12, 13, 'pdftgnmpcwddd'],
    ['b', 5, 6, 'tsrbbb'],
    ['q', 4, 7, 'zrppqcw'],
    ['l', 11, 17, 'llllllllllllllllll'],
    ['b', 1, 4, 'brzbfdgbphrzxtlpgj'],
    ['x', 7, 8, 'xwlxxxxxxl'],
    ['h', 5, 6, 'hhchnm'],
    ['x', 3, 4, 'xxxxx'],
    ['k', 4, 5, 'pkkqjkk'],
    ['k', 4, 8, 'xqkkfwdkmsrr'],
    ['l', 7, 8, 'lllllcsl'],
    ['c', 4, 9, 'ccczcccccccccc'],
    ['j', 8, 12, 'jjjjjjjqjjjjjjjj'],
    ['j', 9, 11, 'vzkhqcjzkwjbpzv'],
    ['r', 11, 12, 'rrrrrrrrrrtxr'],
    ['t', 1, 4, 'mttbgtttttt'],
    ['r', 2, 12, 'rrrrrrrzrrrrrr'],
    ['c', 10, 11, 'ccccccccccgcc'],
    ['d', 9, 16, 'bgdctdzjdxqfrbddznnp'],
    ['s', 3, 7, 'brsjsdsh'],
    ['j', 3, 11, 'cjwlbhgvcjc'],
    ['j', 13, 16, 'pjfrdprjhmfqjddq'],
    ['n', 9, 15, 'nnnnnnnnnnnnnnnnn'],
    ['b', 14, 15, 'zbbbtbfbbbbbbbl'],
    ['p', 4, 14, 'pppppppppppppjpp'],
    ['j', 3, 6, 'pwbfjs'],
    ['z', 1, 11, 'zzzzzzzzzzjz'],
    ['d', 7, 17, 'gldddpskdbvmdmwgk'],
    ['g', 5, 18, 'gggggggggggnmggggggg'],
    ['g', 6, 7, 'llgggdh'],
    ['j', 4, 5, 'zszjs'],
    ['s', 3, 13, 'kwjbvbgxhwsbskjdkbv'],
    ['c', 1, 2, 'kghcc'],
    ['k', 1, 8, 'vtkthkhs'],
    ['n', 6, 7, 'nnnnnnnnn'],
    ['s', 13, 14, 'xssssssssssssq'],
    ['h', 3, 4, 'hhxnh'],
    ['g', 8, 10, 'gctrgrcgjg'],
    ['n', 7, 9, 'nnncnnnnnn'],
    ['b', 7, 8, 'bbnpbbbbb'],
    ['x', 6, 11, 'jxqtcxxdxkxcwtxhdv'],
    ['q', 10, 11, 'qqqkqkqqqqzqqq'],
    ['k', 5, 6, 'kkkkkk'],
    ['m', 3, 4, 'lndx'],
    ['l', 14, 18, 'hdzlvpxlqnbklgpqgpz'],
    ['f', 14, 18, 'ffffffffffxfffffff'],
    ['p', 4, 9, 'gprzchppz'],
    ['q', 5, 7, 'qqsljxk'],
    ['q', 7, 8, 'pqqjqnkq'],
    ['v', 3, 6, 'jvmvvvvvvjvf'],
    ['l', 2, 10, 'hllsznczblmxbrmrnj'],
    ['w', 13, 14, 'wwwwwwwwwwwwvc'],
    ['m', 4, 8, 'mnmmmmmgm'],
    ['r', 10, 11, 'rrrrrrwcrlq'],
    ['q', 3, 4, 'qqqq'],
    ['s', 4, 9, 'spwsjshpst'],
    ['k', 1, 6, 'kkznkkkkk'],
    ['t', 2, 6, 'dlbjpf'],
    ['d', 7, 10, 'qxqbdtddgdvzmdmrp'],
    ['b', 16, 18, 'bbbbbblbbbbbbbbvbs'],
    ['c', 1, 5, 'cwbbccccccb'],
    ['z', 4, 11, 'zrxzszzlzvzzzmdkt'],
    ['b', 17, 19, 'bppptxztffxxqnlpbbb'],
    ['n', 3, 9, 'nnnlncrnnnnn'],
] 


const answer1 = input.filter(
    ([char, min, max, pass]) => {
        const count = pass.replace(new RegExp(`[^${char}]`, 'g'), '').length
        return count >= min && count <= max
    }
).length

console.log(answer1);

const answer2 = input.filter(
    ([char, a, b, pass]) => (pass[a-1] === char) ^ (pass[b-1] === char)
).length

console.log(answer2)