<?php
//valores formulário lancar_ferias
//pegar informações do select
$selectRefAno = $_POST['fériasRefAno'] ?? '';
$selectFerRefAno = $_POST['feriasRefAno'] ?? '';
$selectCateg = $_POST['categSelect'] ?? '';
$selectPosto = $_POST['postoSelect'] ?? '';

//pegar informações das strings
$nomePessoa = htmlspecialchars(mb_strtoupper(trim($_POST['nomePes'] ?? ''), 'UTF-8'), ENT_QUOTES, 'UTF-8');
$nomeGuerra =  htmlspecialchars(mb_strtoupper(trim($_POST['nomeGuerra'] ?? ''), 'UTF-8'), ENT_QUOTES, 'UTF-8');
$esp = htmlspecialchars(mb_strtoupper(trim($_POST['esp'] ?? ''), 'UTF-8'), ENT_QUOTES, 'UTF-8');;

//pegar valores numéricos
$nip = trim($_POST['setorSelect'] ?? '');
$qtdDireito = trim($_POST['qtdDireito'] ?? '');

//receber as datas impostas
$dataIn = $_POST['dataIn'] ?? '';
$dataFim = $_POST['dataFim'] ?? '';


