import dayjs from "dayjs";

const movements = [{
  id: Math.random(),
  dhInicial: dayjs().hour(5).minute(2).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().hour(5).minute(15).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'MANUTENÇÃO DE MÁQUINA',
  cor: '#2AA210'
}, {
  id: Math.random(),
  dhInicial: dayjs().hour(5).minute(16).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().hour(5).minute(22).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'ALMOÇO',
  cor: '#CCD'
}, {
  id: Math.random(),
  dhInicial: dayjs().hour(7).minute(25).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().hour(7).minute(29).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'REUNIÃO',
  cor: '#0FD'
}, {
  id: Math.random(),
  dhInicial: dayjs().hour(9).minute(29).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().hour(12).minute(30).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'ALMOÇO',
  cor: '#CCD'
}, {
  id: Math.random(),
  dhInicial: dayjs().hour(13).minute(29).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().hour(14).minute(1).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'PARADA PROGRAMADA',
  cor: '#CC2'
}, {
  id: Math.random(),
  dhInicial: dayjs().hour(14).minute(35).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().hour(15).minute(37).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'REUNIÃO',
  cor: '#0FD'
}, {
  id: Math.random(),
  dhInicial: dayjs().hour(19).minute(38).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().hour(19).minute(51).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'ALMOÇO',
  cor: '#CCD'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(2).minute(15).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(2).minute(16).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'LIMPEZA',
  cor: '#969'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(2).minute(29).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(3).minute(58).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'REUNIÃO',
  cor: '#0FD'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(5).minute(36).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(5).minute(44).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'ALMOÇO',
  cor: '#CCD'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(5).minute(52).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(9).minute(25).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'REUNIÃO',
  cor: '#0FD'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(10).minute(2).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(10).minute(33).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'MANUTENÇÃO DE MÁQUINA',
  cor: '#2AA210'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(11).minute(1).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(11).minute(30).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'REUNIÃO',
  cor: '#0FD'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(11).minute(31).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(11).minute(36).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'LIMPEZA',
  cor: '#969'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(13).minute(9).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(13).minute(44).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'MANUTENÇÃO DE MÁQUINA',
  cor: '#2AA210'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(15).minute(5).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(15).minute(28).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'PARADA PROGRAMADA',
  cor: '#CC2'
}, {
  id: Math.random(),
  dhInicial: dayjs().add(1, 'd').hour(2).minute(5).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().add(1, 'd').hour(3).minute(36).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'LIMPEZA',
  cor: '#969'
}, {
  id: Math.random(),
  dhInicial: dayjs().add(1, 'd').hour(3).minute(37).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().add(1, 'd').hour(3).minute(39).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'MANUTENÇÃO DE MÁQUINA',
  cor: '#2AA210'
}, {
  id: Math.random(),
  dhInicial: dayjs().add(1, 'd').hour(4).minute(20).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().add(1, 'd').hour(6).minute(21).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'LIMPEZA',
  cor: '#969'
}, {
  id: Math.random(),
  dhInicial: dayjs().add(1, 'd').hour(6).minute(26).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().add(1, 'd').hour(7).minute(2).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'PARADA PROGRAMADA',
  cor: '#CC2'
}, {
  id: Math.random(),
  dhInicial: dayjs().add(1, 'd').hour(7).minute(9).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().add(1, 'd').hour(9).minute(14).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'MANUTENÇÃO DE MÁQUINA',
  cor: '#2AA210'
}, {
  id: Math.random(),
  dhInicial: dayjs().add(1, 'd').hour(9).minute(22).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().add(1, 'd').hour(9).minute(33).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'LIMPEZA',
  cor: '#969'
}, {
  id: Math.random(),
  dhInicial: dayjs().add(1, 'd').hour(12).minute(30).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().add(1, 'd').hour(14).minute(15).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'ALMOÇO',
  cor: '#CCD'
}, {
  id: Math.random(),
  dhInicial: dayjs().add(1, 'd').hour(14).minute(18).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().add(1, 'd').hour(14).minute(19).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'PARADA PROGRAMADA',
  cor: '#CC2'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(15).minute(31).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(17).minute(22).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'MANUTENÇÃO DE MÁQUINA',
  cor: '#2AA210'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(17).minute(52).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(17).minute(56).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'PARADA PROGRAMADA',
  cor: '#CC2'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(19).minute(30).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(21).minute(41).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'REUNIÃO',
  cor: '#0FD'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(21).minute(52).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(21).minute(53).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'REUNIÃO',
  cor: '#0FD'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(21).minute(58).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(22).minute(23).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'PARADA PROGRAMADA',
  cor: '#CC2'
}, {
  id: Math.random(),
  dhInicial: dayjs().subtract(1, 'd').hour(22).minute(36).format('YYYY-MM-DD HH:mm:ss'),
  dhFinal: dayjs().subtract(1, 'd').hour(23).minute(3).format('YYYY-MM-DD HH:mm:ss'),
  dsMotivo: 'REUNIÃO',
  cor: '#0FD'
}
];

export { movements };
