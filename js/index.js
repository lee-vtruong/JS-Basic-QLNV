// Đối tượng NhanVien
function NhanVien(tknv, name, email, password, ngaylam, luongCB, chucvu, gioLam) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.ngaylam = ngaylam;
    this.luongCB = luongCB;
    this.chucvu = chucvu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";

    this.tinhTongLuong = function() {
        switch (this.chucvu) {
            case "Sếp":
                this.tongLuong = this.luongCB * 3;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCB * 2;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCB;
                break;
            default:
                this.tongLuong = 0;
        }
        this.tongLuong = this.tongLuong.toLocaleString();
    };

    this.xepLoaiNhanVien = function() {
        if (this.gioLam >= 192) {
            this.loaiNhanVien = "Xuất sắc";
        } else if (this.gioLam >= 176) {
            this.loaiNhanVien = "Giỏi";
        } else if (this.gioLam >= 160) {
            this.loaiNhanVien = "Khá";
        } else {
            this.loaiNhanVien = "Trung bình";
        }
    };
}

// Mảng danh sách nhân viên
let danhSachNhanVien = [];
let nhanVienDangChon = null; // Lưu trữ nhân viên đang được chọn để chỉnh sửa

// Hàm lấy thông tin từ form
function layThongTinNhanVien() {
    let tknv = document.getElementById("tknv").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let ngaylam = document.getElementById("datepicker").value;
    let luongCB = parseFloat(document.getElementById("luongCB").value);
    let chucvu = document.getElementById("chucvu").value;
    let gioLam = parseInt(document.getElementById("gioLam").value);

    return new NhanVien(tknv, name, email, password, ngaylam, luongCB, chucvu, gioLam);
}

// Hàm hiển thị danh sách nhân viên lên table
function hienThiDanhSachNhanVien(arr) {
    let content = "";
    for (let i = 0; i < arr.length; i++) {
        let nv = arr[i];
        nv.tinhTongLuong(); // Tính lương trước khi hiển thị
        nv.xepLoaiNhanVien(); // Xếp loại trước khi hiển thị
        content += `
            <tr>
                <td>${nv.tknv}</td>
                <td>${nv.name}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaylam}</td>
                <td>${nv.chucvu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNhanVien}</td>
                <td>
                    <button class="btn btn-warning btn-sua" data-id="${nv.tknv}">Sửa</button>
                    <button class="btn btn-danger btn-xoa" data-id="${nv.tknv}">Xóa</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

// Hàm validate form
function validateForm(nv) {
    let isValid = true;

    // Hàm helper để hiển thị thông báo lỗi và đánh dấu trường không hợp lệ
    function showError(elementId, message) {
        document.getElementById(elementId).innerText = message;
        document.getElementById(elementId).style.display = "block"; // Hiển thị thông báo
    }

    // Hàm helper để ẩn thông báo lỗi
    function hideError(elementId) {
        document.getElementById(elementId).innerText = "";
        document.getElementById(elementId).style.display = "none"; // Ẩn thông báo
    }

    // Validate Tài Khoản
    if (nv.tknv.length < 4 || nv.tknv.length > 6 || nv.tknv === "") {
        showError("tbTKNV", "Tài khoản phải từ 4-6 ký tự!");
        isValid = false;
    } else {
        hideError("tbTKNV");
    }

    // Validate Tên
    if (!/^[a-zA-Z\s]+$/.test(nv.name) || nv.name === "") {
        showError("tbTen", "Tên nhân viên phải là chữ!");
        isValid = false;
    } else {
        hideError("tbTen");
    }

    // Validate Email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nv.email) || nv.email === "") {
        showError("tbEmail", "Email phải đúng định dạng!");
        isValid = false;
    } else {
        hideError("tbEmail");
    }

    // Validate Mật Khẩu
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/.test(nv.password) || nv.password === "") {
        showError("tbMatKhau", "Mật khẩu từ 6-10 ký tự, chứa ít nhất 1 số, 1 in hoa, 1 đặc biệt!");
        isValid = false;
    } else {
        hideError("tbMatKhau");
    }

    // Validate Ngày Làm
    if (nv.ngaylam === "") {
        showError("tbNgay", "Ngày làm không được để trống!");
        isValid = false;
    } else {
        hideError("tbNgay");
    }

    // Validate Lương Cơ Bản
    if (isNaN(nv.luongCB) || nv.luongCB < 1000000 || nv.luongCB > 20000000) {
        showError("tbLuongCB", "Lương cơ bản từ 1,000,000 - 20,000,000!");
        isValid = false;
    } else {
        hideError("tbLuongCB");
    }

    // Validate Chức Vụ
    if (nv.chucvu === "Chọn chức vụ" || nv.chucvu === "") {
        showError("tbChucVu", "Vui lòng chọn chức vụ hợp lệ!");
        isValid = false;
    } else {
        hideError("tbChucVu");
    }

    // Validate Giờ Làm
    if (isNaN(nv.gioLam) || nv.gioLam < 80 || nv.gioLam > 200) {
        showError("tbGiolam", "Giờ làm phải từ 80-200 giờ!");
        isValid = false;
    } else {
        hideError("tbGiolam");
    }

    return isValid;
}

// Hàm reset form
function resetForm() {
    document.getElementById("formLogIn").reset(); // Reset giá trị các input

    // Ẩn tất cả các thông báo lỗi
    hideError("tbTKNV");
    hideError("tbTen");
    hideError("tbEmail");
    hideError("tbMatKhau");
    hideError("tbNgay");
    hideError("tbLuongCB");
    hideError("tbChucVu");
    hideError("tbGiolam");

    document.getElementById("tknv").disabled = false; // Mở lại ô tài khoản
    nhanVienDangChon = null; //reset biến toàn cục
}

// --- Các sự kiện ---
document.getElementById("btnThemNV").addEventListener("click", function() {
    let nv = layThongTinNhanVien();
    if (validateForm(nv)) {
        danhSachNhanVien.push(nv);
        hienThiDanhSachNhanVien(danhSachNhanVien);
        resetForm();
        $("#myModal").modal("hide");
    }
});

document.getElementById("tableDanhSach").addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-xoa")) {
        let id = e.target.dataset.id;
        danhSachNhanVien = danhSachNhanVien.filter(nv => nv.tknv !== id);
        hienThiDanhSachNhanVien(danhSachNhanVien);
    } else if (e.target.classList.contains("btn-sua")) {
        let id = e.target.dataset.id;
        nhanVienDangChon = danhSachNhanVien.find(nv => nv.tknv === id);
        if (nhanVienDangChon) {
            // Điền thông tin vào form
            document.getElementById("tknv").value = nhanVienDangChon.tknv;
            document.getElementById("name").value = nhanVienDangChon.name;
            document.getElementById("email").value = nhanVienDangChon.email;
            document.getElementById("password").value = nhanVienDangChon.password;
            document.getElementById("datepicker").value = nhanVienDangChon.ngaylam;
            document.getElementById("luongCB").value = nhanVienDangChon.luongCB;
            document.getElementById("chucvu").value = nhanVienDangChon.chucvu;
            document.getElementById("gioLam").value = nhanVienDangChon.gioLam;

            // Vô hiệu hóa ô tài khoản để không sửa được
            document.getElementById("tknv").disabled = true;

            // Hiển thị modal
            $("#myModal").modal("show");
        }
    }
});

document.getElementById("btnCapNhat").addEventListener("click", function() {
    if (!nhanVienDangChon) {
        alert("Vui lòng chọn nhân viên để cập nhật.");
        return;
    }

    let nv = layThongTinNhanVien();

    if (validateForm(nv)) {
        // Cập nhật thông tin nhân viên trong mảng
        nhanVienDangChon.name = nv.name;
        nhanVienDangChon.email = nv.email;
        nhanVienDangChon.password = nv.password;
        nhanVienDangChon.ngaylam = nv.ngaylam;
        nhanVienDangChon.luongCB = nv.luongCB;
        nhanVienDangChon.chucvu = nv.chucvu;
        nhanVienDangChon.gioLam = nv.gioLam;

        hienThiDanhSachNhanVien(danhSachNhanVien);
        resetForm();
        $("#myModal").modal("hide");
    }
});

document.getElementById("btnTimNV").addEventListener("click", function() {
    let loai = document.getElementById("searchName").value.trim().toLowerCase();
    let danhSachTimKiem = danhSachNhanVien.filter(nv => nv.loaiNhanVien.toLowerCase().includes(loai));
    hienThiDanhSachNhanVien(danhSachTimKiem);
});

document.getElementById("btnDong").addEventListener("click", resetForm);

// Gọi datepicker của JQuery UI
$(function() {
    $("#datepicker").datepicker({
        dateFormat: 'mm/dd/yy' // Định dạng ngày tháng
    });
});