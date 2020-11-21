import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
//service
import { TaskServices } from '../../services/task.services';
import { SystemService } from '../../services/system.services';
import { UserService } from '../../services/user.service';
import { FileManagerServices } from 'app/services/fileManager.services';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  providers: [
    TaskServices,
    SystemService,
    UserService,
    FileManagerServices
  ]
})
export class TaskDetailComponent implements OnInit {

  constructor(
    private taskServices: TaskServices,
    private systemService: SystemService,
    private messageService: MessageService,
    private userService: UserService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private fileManagerService: FileManagerServices,
    private sanitizer: DomSanitizer
  ) { 
    this.linkAttackUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.Linkpreview);
  }
  linkAttackUrl:any;
  @ViewChild("scollBottom1stTime") scollBottom1stTime: ElementRef;
  TaskCOde: string;
  currentTaskId: number;
  datas: any = { result: { data: { taskName: "", content: "" } } }
  data: any = [];
  msgContent: string = "";
  currentUser = JSON.parse(localStorage.getItem("userData"));
  inEditChat: boolean = false;
  dueDate: any;
  dueDateForShow: any;
  createDateForShow: any;
  attachFileType: any = [];
  taskStatus: any = [];
  currentStatus: string; //trạng thái hiện tại của status
  oldStatus: string;  // nếu hủy sự kiện thay đổi sẽ gán currentStatus = oldStatus, nếu ok sẽ cập nhật biến mới
  loading: boolean = false;
  EditMota: boolean = false;
  vn: any;
  UrlConverted: string;
  dataMember: any = { username: "" };
  editTongTien: boolean = false;
  oldValue: any;
  tongtien: number;
  async ngOnInit() {
    this.loading = true;
    this.TaskCOde = this.route.snapshot.queryParams.id

    this.vn = {
      firstDayOfWeek: 0,
      dayNames: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
      dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      today: 'Hôm nay',
      clear: 'Xóa',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'tuần'
    };

    await this.taskServices.getTaskStatus().toPromise().then(async data => {
      if (data.result.success) {
        console.log(data)
        let fileType: any = [];
        fileType = data;
        await fileType['result'].data.forEach(async element => {
          await this.taskStatus.push({ label: element.displayValue, value: element.value })
        }); console.log(this.taskStatus)
      } else {
        this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    })

    await this.taskServices.getTaskByCode(this.TaskCOde).toPromise().then(data => {
      if (data.result.success) {
        this.datas = data;
        this.data = this.datas.result.data;
        this.oldValue = [this.data].splice(0)[0].amount;
        this.tongtien = this.data.amount;
        this.oldDescription = this.data.content //nếu hủy sửa nội dung, nội dung sẽ gán lại bằng Olddescription
        this.UrlConverted = this.convertToUrl(this.data.content)
        this.currentTaskId = this.data.taskId;
        this.taskStatus.forEach(e => {
          if (this.data.status == e.value) { this.currentStatus = e.value; this.oldStatus = e.value }
        });
        this.dueDate = new Date(this.data.dueDate);
        this.Old_dueDate = this.dueDate //nếu hủy cập nhật ngày hết hạn, ngày hết hạn sẽ gán lại bằng Old_dueDate
        this.dueDateForShow = formatDate(this.Old_dueDate, 'hh:mm dd-MM-yyyy', 'en-US');
        this.createDateForShow = formatDate(new Date(this.data.createdDate), 'hh:mm dd-MM-yyyy', 'en-US');
        setTimeout(() => {
          this.scrollToBottom(); // sau khi tải dữ liệu về, thanh cuộn đến cuối trang chat
        }, 500);

        this.loading = false;
        this.messageService.add({ key: 'chitietcv', severity: 'success', summary: 'Thông báo', detail: "Tải dữ liệu thành công!" });
      } else {
        this.loading = false
        this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    });


    this.systemService.getAttachFileType().toPromise().then(data => {
      if (data.result.success) {
        let fileType: any = [];
        fileType = data;
        fileType['result'].data.forEach(element => {
          this.attachFileType.push({ label: element.displayValue, value: element.value })
        });
        console.log(this.attachFileType)
      } else {
        this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    });
  }

  dropdownLyDo: any = [];
  currentLyDo: null;
  loadData() {
    this.loading = true;
    this.taskServices.getTaskByCode(this.TaskCOde).toPromise()
      .then(dulieu => {
        this.datas = dulieu;
        this.data = this.datas.result.data;
        this.dueDate = new Date(this.data.dueDate);
        this.Old_dueDate = this.dueDate;
        this.dueDateForShow = formatDate(this.Old_dueDate, 'hh:mm dd-MM-yyyy', 'en-US')
        this.taskStatus.forEach(e => {
          if (this.data.status == e.value) { this.currentStatus = e.value; }
        });
        this.loading = false;
      })
  }

  removeMember(userId, taskUserId, username) {
    console.log(this.currentTaskId, userId, taskUserId)
    this.confirmationService.confirm({
      key: "chitietcv",
      header: "Xác nhận",
      message: `Gỡ bỏ người xử lý: ${username.bold()}?`,
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        this.loading = true;
        this.taskServices.removeTaskMember({ TaskId: this.currentTaskId, UserId: userId, TaskMemberId: taskUserId }).toPromise().then(
          data => {
            if (data.result.success) {
              this.data.lsMember.splice(this.data.lsMember.findIndex(e => e.UserId == userId), 1);
              this.messageService.add({ key: 'chitietcv', severity: 'success', summary: 'Thông báo', detail: `Đã gỡ bỏ ${username}!` });
              this.loading = false;
            } else {
              this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
              this.loading = false;
            }
          }
        )
      },
    });
  }
  msgKeyUp(e) {
    if (e.keyCode == 13 && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      this.sendMsg();
    }
  }
  sendMsg() {
    if (this.msgContent != "") {
      this.loading = true;
      this.taskServices.addTaskChat({ TaskId: this.currentTaskId, Content: this.msgContent }).toPromise().then(async () => {
        await this.loadData();
        this.msgContent = await ""
        this.loading = false;
        await setTimeout(() => {
          this.scrollToBottom(); // sau khi tải dữ liệu về, thanh cuộn đến cuối trang chat
        }, 2000);
      }
      )
    }
  };

  deleteAChat(taskChatid, tab) {
    console.log(taskChatid)
    this.loading = true;
    this.taskServices.deleteTaskChat(taskChatid).toPromise().then(
      async () => {
        await this.loadData();
        await tab.hide()
        this.loading = await false;
      }
    )
  }

  showPickReasion: boolean = false;
  async updateTaskStatus(event) {
    console.log(this.data, this.currentStatus)
    let bodyRequest = [{
      Content: this.data.content,
      DueDate: this.data.dueDate,
      Status: this.currentStatus,
      Type: this.data.type,
      TaskId: this.currentTaskId,
      Amount: this.data.amount,
    }]
    await this.taskServices.getLsReasion(bodyRequest).toPromise().then(async data => {
      if (data.result.success) {
        let dataReasion = [];
        this.dropdownLyDo = [];
        dataReasion = data.result.data;
        await dataReasion.forEach(e => this.dropdownLyDo.push({ value: e.taskReasionId, label: e.reasionName }))
      } else {
        this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    });
    if (this.dropdownLyDo.length != 0) { this.showPickReasion = await true } else { this.showPickReasion = await false; }
    let tus = await this.taskStatus.find(e => e.value == this.currentStatus);
    await this.confirmationService.confirm({
      key: "chitietcvConfirm",
      header: "Xác nhận",
      message: `Cập nhật trạng thái công việc thành “${tus.label.bold()}”?`,
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        this.loading = true;
        this.taskServices.updateTaskStatus({
          TaskId: this.currentTaskId,
          Content: this.data.content,
          DueDate: this.data.dueDate,
          Type: this.data.type,
          Status: this.currentStatus,
          taskReasionId: this.currentLyDo,
          Amount: this.data.amount
        }).toPromise().then((data) => {
          if (data.result.success) {
            console.log(data)
            this.oldStatus = this.currentStatus;
            this.currentLyDo = null;
            this.messageService.add({ key: 'chitietcv', severity: 'success', summary: 'Thông báo', detail: "Cập nhật thành công!" });
            this.loading = false;
          } else {
            this.currentStatus = this.oldStatus;
            this.loading = false;
            this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
          }
        }
        )
      },
      reject: () => {
        this.currentStatus = this.oldStatus;
      }
    });

  }

  currentChatEdit: any;
  oldChat: string;
  GoEdit(taskChatId, oldmsg) {
    this.currentChatEdit = taskChatId;
    this.oldChat = oldmsg;
    this.inEditChat = true;
  }
  sendEditChat(taskChatId, msg) {
    console.log(taskChatId, msg)
    this.loading = true;
    this.taskServices.updateTaskChat({ TaskChatId: taskChatId, Content: msg }).toPromise().then(
      async () => {
        await this.loadData();
        this.inEditChat = await false;
        this.loading = await false;
      }
    )
  }

  nameHandler: string;
  listSearchUser: any = { result: { data: "" } };
  keyUpFindHandle(e) {
    if (e.keyCode == 13) {
      this.loading = true;
      console.log(this.nameHandler)
      this.userService.searchUser(this.nameHandler).toPromise().then(data => {
        this.listSearchUser = data;
        console.log(data)
        this.loading = false;
      })
    }
  }

  checkUser(userID) {
    let count = 0;
    this.data.lsMember.forEach(element => {
      if (userID == element.userId) {
        count++;
        return "specialColor";
      }
    });
    if (count == 0) { return "colorInherit" }
  }

  addMember(userId) {
    this.loading = true;
    this.taskServices.addTaskMember({ TaskId: this.currentTaskId, UserId: userId }).toPromise().then(
      data => {
        if (data.result.success) {
          this.loadData();
          this.loading = false;
        }
      }
    )
  }

  oldDescription: string = "";
  showPanelUpdateCV(e) {
    //kiểm tra nếu click vào thẻ A thì không chuyển sang chế độ edit
    if (e.target.className.indexOf("clickTheA") != -1) { return }
    this.EditMota = true;
  }

  hidePanelUpdateCV() {
    setTimeout(() => {
      this.EditMota = false;
      this.data.content = this.oldDescription
    }, 100);
  }

  updateDescription() {
    setTimeout(() => {
      this.loading = true;
      this.taskServices.updateTaskDescrip({
        TaskId: this.currentTaskId,
        Content: this.data.content,
        DueDate: this.data.dueDate,
        Status: this.data.status
      })
        .toPromise().then((data) => {
          console.log(data)
          if (data.result.success) {
            this.loadData();
            this.EditMota = false;
            this.UrlConverted = this.convertToUrl(this.data.content);
            this.oldDescription = this.data.content
            this.loading = false;
          } else {
            this.loading = false;
            this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
          }
        }
        )
    }, 100);

  }

  removeAttachFile(fileId) {
    this.confirmationService.confirm({
      key: "chitietcv",
      header: "Xác nhận",
      message: 'Xóa bỏ đường dẫn(link) đính kèm?',
      acceptLabel: "Có",
      rejectLabel: "Không",
      accept: () => {
        this.loading = true;
        this.taskServices.deleteTaskAttachFile(fileId).toPromise().then(data => {
          if (data.result.success) {
            this.data.lsAttachFile.splice(this.data.lsAttachFile.findIndex(ele =>
              ele.attachFileId == fileId
            ), 1);
            this.loading = false;
          }
        })
      }
    });

  }

  AddAttachFile(form, panel) {
    let attachFile = {
      AttachLink: form.value.attachLink,
      AttachName: form.value.attachName,
      Type: form.value.type,
      RefId: this.data.taskId
    }
    this.loading = true;
    this.taskServices.addTaskAttachFile(attachFile).toPromise().then(data => {
      if (data.result.success) {
        this.loadData();
        // panel.hide();
        // form.onReset();
        this.loading = false;
      } else {
        this.loading = false;
      }
    })
  }

  Old_dueDate: any;
  changeDueDate() {
    this.loading = true;
    this.taskServices.updateTaskDescrip(
      {
        TaskId: this.currentTaskId,
        Content: this.data.content,
        DueDate: formatDate(this.dueDate, 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        Status: this.data.status,
      }
    )
      .toPromise().then(() => {
        this.loadData();
        this.loading = false;
      })
  }
  closePanelUpdateDate(panel) {
    panel.hide()
    this.dueDate = this.Old_dueDate;
  }

  getLink(link) {
    if (link.indexOf("https://") != -1) { return link }
    else { return "https://" + link }
  }
  arrayContainDataForShow:any;
  Linkpreview:string;
  isOpenLargeImg:boolean = false;
  attackImage:any;
  isImage:boolean = false;
  previewLink(link,type){
    console.log(link)
    let catchLink = '';
    if (link.indexOf("https://") != -1) { catchLink = link }
    else { catchLink = "https://" + link };
    this.Linkpreview = catchLink;
    this.linkAttackUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.Linkpreview);
    if (type == '1'){ this.isImage= true} else { this.isImage = false;};console.log(this.isImage)
    this.isOpenLargeImg = true;
  }

  getFirstCharacterInUserName(username: string) {
    return username.slice(0, 1).toUpperCase()
  }

  scrollToBottom() {
    this.scollBottom1stTime.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  convertToUrl(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    let convert1st = text.replace(urlRegex, (url) => {
      return '<a href="' + url + '" target="_blank" class="clickTheA">' + url + '</a>';
    })
    let convert2nd = convert1st.replace(/\n/ig, (enter) => { return '<br>'; });
    return convert2nd;
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }

  changeAmount(e) {
    this.editTongTien = false;
    this.loading = true;
    console.log(e);
    console.log(this.tongtien);
    this.taskServices.updateAmount(
      {
        TaskId: this.currentTaskId,
        Content: this.data.content,
        DueDate: this.data.dueDate,
        Status: this.currentStatus,
        Amount: e,
      }
    ).toPromise().then((res) => {
      if (res.result.success) {
        this.data.amount = e;
        this.messageService.add({ key: 'chitietcv', severity: 'success', summary: 'Thông báo', detail: "Cập nhật thành công!" });
        this.loading = false;
      } else {
        this.loading = false;
        this.data.amount = this.oldValue;
        this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: res.result.message });
      }
    })
  }

  fileUpload: any;
  arrayContainLink: any = [];
  onChangeFile(e) {
    if (e.target.files[0] == undefined) {
    } else {
      this.fileUpload = e.target.files[0];console.log(this.fileUpload)
    }
  }
  dinhkemFile(panel, rowValue) {
    this.loading = true;
    let formdat = new FormData();
    formdat.append('file', this.fileUpload);console.log(formdat)
    // this.blockScreen = true;
    this.fileManagerService.uploadFile(formdat).toPromise().then(data => {
      console.log(data)
      if (data.result.success) {
        let form = { value: data.result.data };
        this.AddAttachFile(form, "panel");
        (document.getElementById("attackData") as HTMLInputElement).value = "";
        this.messageService.add({ key: 'chitietcv', severity: 'success', summary: 'Thông báo', detail: "Tải lên thành công!" });
      } else {
        //this.blockScreen = false;
        this.loading = false;
        this.messageService.add({ key: 'chitietcv', severity: 'error', summary: 'Thông báo', detail: data.result.message });
      }
    })
  }

  money_format(sotien: number, kihieu, vitri) {
    let nStr = sotien==undefined?'':sotien.toString()
    let kq: string = "";
    if (parseFloat(nStr) == 0) {
      kq = "";
    } else {
      nStr += "";
      let x = nStr.split(".");
      let x1 = x[0];
      let x2 = x.length > 1 ? "," + x[1] : "";
      let rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "." + "$2");
      }
      kq = x1 + x2 + kihieu;
      switch (vitri) {
        case '1':
          kq = x1 + x2 + ' ' + kihieu;
          break;
        case '2':
          kq = kihieu + ' ' + x1 + x2;
      }
    }
    return kq;
  }
}
