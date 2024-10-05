// 오늘 수업에 출석한 횟수 당 한 장씩 티켓을 발급.

import mongoose from 'mongoose';

const ticketMakerSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true
    },
    attendance: {
        type: Boolean,
        default: false
    },
    ticket: {
        type: Number,
        default: 0
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClassAcount',  // 참조할 모델
        required: true
    }
});

// 티켓 발급
ticketMakerSchema.methods.issueTicket = function() {
    if (attendanceData.studentId === this.studentId && attendanceData.classId === this.classId) {
        this.attendance = attendanceData.isPresent;  
    }

    if (this.attendance) {
        this.ticket += 1;
    }
};
