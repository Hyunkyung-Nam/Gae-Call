const express = require("express");
const controller = require("../controller/project_issue");
const router = express.Router();
const { uploadIssueFiles } = require("../middleware/multer");
const middleware = require("../middleware/auth");

// 프로젝트 이슈 작성 + 조회
router.post("/", middleware.auth, uploadIssueFiles, controller.createProjectIssue);
router.get("/", middleware.auth, controller.getProjectIssues);

// 프로젝트 이슈 검색
router.get("/search", middleware.auth, controller.searchProjectIssues);

// 프로젝트 이슈 상세 조회 + 수정 + 삭제
router.get("/detail/:id", middleware.auth, controller.getProjectIssueDetail);
router.patch("/detail/:id", middleware.auth, uploadIssueFiles, controller.updateProjectIssueDetail);
router.delete("/detail/:id", middleware.auth, controller.deleteProjectIssueDetail);
router.delete("/detail/file/:id", middleware.auth, uploadIssueFiles, controller.deleteProjectIssueFile);

//댓글 관리 편리하게 하고자 분리함
//프로젝트 이슈 댓글 작성
router.post("/comment/:id", middleware.auth, controller.writeProjectIssueComment);
//프로젝트 이슈 댓글 조회 + 수정 + 삭제
router.get("/comment/:id", middleware.auth, controller.getProjectIssueComment);
router.patch("/comment/:id", middleware.auth, controller.updateProjectIssueComment);
router.delete("/comment/:id", middleware.auth, controller.deleteProjectIssueComment);

module.exports = router;