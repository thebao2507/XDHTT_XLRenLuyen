import Noidung12 from '../noidung/Noidung12'
import Ketquahoctap from '../noidung/Ketquahoctap'
import Noidung13 from '../noidung/Noidung13'
import Noidung14 from '../noidung/Noidung14'
import Noidung21 from '../noidung_muc2/Noidung21'
import Noidung22 from '../noidung_muc2/Noidung22'
import Noidung23 from '../noidung_muc2/Noidung23'
import Noidung31 from '../noidung_muc3/Noidung31'
import Noidung41 from '../noidung_muc4/Noidung41'
import Noidung42 from '../noidung_muc4/Noidung42'
import Noidung43 from '../noidung_muc4/Noidung43'
import Noidung51 from '../noidung_muc5/Noidung51'
import Noidung52 from '../noidung_muc5/Noidung52'
import Noidung6 from '../noidung_muc6/Noidung6'

export const evaluationItems = [
    {
        idmuc: 1,
        titlemuc: 'Ý thức học tập',
        dsm: [
            { iddsm: 1.1, title: 'Kết quả học tập', noidung: <Ketquahoctap /> },
            { iddsm: 1.2, title: 'Ý thức và kết quả tham gia các hoạt động học thuật', noidung: <Noidung12 /> },
            { iddsm: 1.3, title: 'Tích học nâng cao trình độ ngoại ngữ:', noidung: <Noidung13 /> },
            { iddsm: 1.4, title: 'Chấp hành tốt các nội quy, quy định về học vụ (chuyên cần, thực hành thực tế, thực tập): +4đ', noidung: <Noidung14 /> },
        ]
    },
    {
        idmuc: 2,
        titlemuc: 'Ý thức và kết quả chấp hành nội quy, quy chế trong nhà trường',
        dsm: [
            { iddsm: 2.1, title: 'Chấp hành đầy đủ và không vi phạm các nội quy, quy chế về: học tập, sinh hoạt, thực hiện nếp sống văn hóa, văn minh: +20đ', noidung: <Noidung21 /> },
            { iddsm: 2.2, title: 'Chấp hành đầy đủ và không vi phạm các quy chế nội, ngoại trú: +5đ', noidung: <Noidung22 /> },
            { iddsm: 2.3, title: 'Sinh viên vi phạm các nội quy, quy chế thi,… bị kỷ luật', noidung: <Noidung23 /> },
        ]
    },
    {
        idmuc: 3,
        titlemuc: 'Ý thức và kết quả tham gia các hoạt động chính trị - xã hội, văn hóa, văn nghệ, thể thao, phòng chống các tệ nạn xã hội:',
        dsm: [
            { iddsm: 3.1, title: 'Tham gia các hoạt động chính trị-XH, VH-VN-TDTT, ngoại khóa, phòng chống tệ nạn XH:', noidung: <Noidung31 /> },
            { iddsm: 3.2, title: `Tham gia các hoạt động huy động lực lượng (cấp khoa trở lên): +3đ/lần`, noidung: '' },
        ]
    },
    {
        idmuc: 4,
        titlemuc: 'Phẩm chất công dân và quan hệ cộng đồng',
        dsm: [
            { iddsm: 4.1, title: 'Chấp hành tốt và tuyên truyền các chủ trương của Đảng, chính sách, pháp luật của Nhà nước; quan hệ tốt trong lớp, trong trường, ở nơi cư trú; có lối sống lành mạnh (không sử dụng ma túy và các chất gây nghiện; không hút thuốc lá; hạn chế uống rượu, bia,...): +15đ', noidung: <Noidung41 /> },
            { iddsm: 4.2, title: 'Tham gia các hoạt động tình nguyện, hoạt động xã hội:', noidung: <Noidung42 /> },
            { iddsm: 4.3, title: 'Tham gia giữ gìn trật tự an toàn xã hội, đấu tranh bảo vệ pháp luật; chia sẻ giúp đỡ người thân; cứu giúp người khó khăn, hoạn nạn: +3đ', noidung: <Noidung43 /> },
        ]
    },
    {
        idmuc: 5,
        titlemuc: 'Ý thức và kết quả tham gia hoạt động của lớp, các đoàn thể, tổ chức khác trong trường',
        dsm: [
            { iddsm: 5.1, title: 'Ban cán sự lớp, cán bộ Đoàn (chi đoàn, LCĐ, Đoàn trường), cán bộ Hội Sinh viên (chi hội, LCH, HSV trường), đội trưởng/phó đội xung kích (khoa, trường), ban chủ nhiệm các CLB thuộc khoa:', noidung: <Noidung51 /> },
            { iddsm: 5.2, title: 'Sinh viên là nhân tố tích cực trong các hoạt động của lớp, khoa, trường (không thuộc các đối tượng ở mục 5.1):', noidung: <Noidung52 /> },
            { iddsm: 5.3, title: `Là thành viên của ít nhất 1 câu lạc bộ học thuật/kỹ năng của Trường Đại học Quy Nhơn: +3đ`, noidung: '' },
        ]
    },
    {
        idmuc: 6,
        titlemuc: 'Sinh viên có thành tích đặc biệt',
        dsm: [
            { iddsm: 6, title: 'Sinh viên có thành tích đặc biệt:', noidung: <Noidung6 /> }
        ]
    }
]
