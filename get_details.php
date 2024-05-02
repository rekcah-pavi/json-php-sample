<?php
$studentsJson = file_get_contents('students.json');
$students = json_decode($studentsJson, true);

if (isset($_GET['sid'])) {
    $sid = $_GET['sid'];
    foreach ($students as $student) {
        if ($student['sid'] == $sid) {
            echo json_encode($student);
            return;
        }
    }
    echo '{"error":"Student not found"}';
} else {
    echo '{"error":"Missing Student id"}';
}
?>
