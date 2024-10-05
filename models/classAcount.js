// 오늘 수업이 몇 개인지 저장
const classAcountSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,
        unique: true
    },

    when: {
        type: Number, 
        required: true
    },
});

 // 요일 정의
// 0: 월요일, 1: 화요일, 2: 수요일, 3: 목요일, 4: 금요일, 5: 토요일, 6: 일요일
classAcountSchema.methods.weekNum = function() { 
    const currentDate = new Date(); 
    const dayOfWeek = currentDate.getDay(); 

    const adjustedDay = (dayOfWeek + 6) % 7; 

    return adjustedDay; 
};



const classAcount = mongoose.model('classAcount', classAcountSchema);

export default classAcount;