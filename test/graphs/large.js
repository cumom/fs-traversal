module.exports = {
  
  persons: [
    {id:'1', name:'base person'},
    {id:'2', name:'spouse'},
    {id:'3', name:'father'},
    {id:'4', name:'mother'},
    {id:'5', name:'son'},
    {id:'6', name:'grandfather'},
    {id:'7', name:'grandmother'},
    {id:'8', name:'uncle'},
    {id:'9', name:'aunt'},
    {id:'10', name:'cousin'},
    {id:'11', name:'cousin\'s wife'},
    {id:'12', name:'cousin\'s child'},
    {id:'13', name:'great-grandfather'},
    {id:'14', name:'great-grandmother'},
    {id:'15', name:'2nd great-grandmother'},
    {id:'16', name:'2nd great-grandfather'},
    {id:'17', name:'great uncle'},
    {id:'18', name:'great aunt'},
    {id:'19', name:'great aunt\'s child'},
    {id:'20', name:'mother-in-law'},
    {id:'21', name:'father-in-law'},
    {id:'22', name:'sister-in-law'},
    {id:'23', name:'sister-in-laws husband'},
    {id:'24', name:'grandfather-in-law'},
    {id:'25', name:'grandmother-in-law'},
    {id:'26', name:'uncle-in-law'},
    {id:'27', name:'aunt-in-law'},
    {id:'28', name:'cousin-in-law'},
    {id:'29', name:'sister'},
    {id:'30', name:'brother-in-law'},
    {id:'31', name:'neice'},
    {id:'32', name:'neices husband'},
    {id:'33', name:'daughter-in-law'},
    {id:'34', name:'granddaughter'},
    {id:'35', name:'grandson-in-law'},
    {id:'36', name:'granddaughters husbands father'},
    {id:'37', name:'granddaughters husbands mother'},
    {id:'38', name:'granddaughters husbands grandfather'},
    {id:'39', name:'granddaughters husbands grandmother'}
  ],
  
  marriages: [    
    {husband:'1', wife:'2'},
    {husband:'3', wife:'4'},
    {husband:'6', wife:'7'},
    {husband:'8', wife:'9'},
    {husband:'10', wife:'11'},
    {husband:'13', wife:'14'},
    {husband:'15', wife:'16'},
    {husband:'17', wife:'18'},
    {husband:'21', wife:'20'},
    {husband:'23', wife:'22'},
    {husband:'24', wife:'25'},
    {husband:'26', wife:'27'},
    {husband:'30', wife:'29'},
    {husband:'32', wife:'31'},
    {husband:'5', wife:'33'},
    {husband:'35', wife:'34'},
    {husband:'36', wife:'37'},
    {husband:'38', wife:'39'}
  ],
    
  childofs: [
    {child:'1', father:'3', mother:'4'},
    {child:'5', father:'1', mother:'2'},
    {child:'4', father:'6', mother:'7'},
    {child:'8', father:'6', mother:'7'},
    {child:'10', father:'8', mother:'9'},
    {child:'12', father:'10', mother:'11'},
    {child:'6', father:'13', mother:'14'},
    {child:'14', father:'16', mother:'15'},
    {child:'18', father:'13', mother:'14'},
    {child:'19', father:'17', mother:'18'},
    {child:'2', father:'21', mother:'20'},
    {child:'22', father:'21', mother:'20'},
    {child:'21', father:'24', mother:'25'},
    {child:'27', father:'24', mother:'25'},
    {child:'28', father:'26', mother:'27'},
    {child:'29', father:'3', mother:'4'},
    {child:'31', father:'30', mother:'29'},
    {child:'34', father:'5', mother:'33'},
    {child:'35', father:'36', mother:'37'},
    {child:'37', father:'38', mother:'39'}
  ]
  
};