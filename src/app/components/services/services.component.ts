import { Component } from '@angular/core';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Servicios Cloud',
      description: 'Soluciones de infraestructura en la nube para optimizar sus operaciones y reducir costos.',
      icon: 'icon-cloud-server'
    },
    {
      id: 2,
      title: 'Bases de Datos',
      description: 'Gestión y optimización de bases de datos Oracle para garantizar rendimiento y disponibilidad.',
      icon: 'icon-database'
    },
    {
      id: 3,
      title: 'Seguridad',
      description: 'Protección integral de sus datos y sistemas con soluciones de seguridad avanzadas.',
      icon: 'icon-shield'
    },
    {
      id: 4,
      title: 'Soluciones ERP',
      description: 'Implementación y soporte de sistemas ERP para la gestión eficiente de su empresa.',
      icon: 'icon-erp'
    },
    {
      id: 5,
      title: 'Optimización',
      description: 'Mejora del rendimiento de sus aplicaciones y bases de datos para maximizar la eficiencia.',
      icon: 'icon-performance'
    },
    {
      id: 6,
      title: 'Soporte Técnico',
      description: 'Asistencia técnica especializada para resolver problemas y mantener sus sistemas operativos.',
      icon: 'icon-ticket'
    },
    {
      id: 7,
      title: 'Análisis y Reportes',
      description: 'Herramientas de análisis de datos para obtener información valiosa para su negocio.',
      icon: 'icon-chart'
    },
    {
      id: 8,
      title: 'Consultoría',
      description: 'Asesoramiento experto para la implementación y optimización de soluciones tecnológicas.',
      icon: 'icon-chat'
    }
  ];
}
