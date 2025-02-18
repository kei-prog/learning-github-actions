import { danger, warn } from "danger";

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn("Please include a description of your PR changes.");
}

const totalChanges = danger.github.pr.additions + danger.github.pr.deletions;

const modifiedFilesCount = danger.github.pr.changed_files;

if (totalChanges > 200) {
  warn("追加行と削除行の合計が200行を超えないようにしてください");
}

if (modifiedFilesCount > 10) {
  warn("編集ファイル数が10ファイルを超えないようにしてください");
}

