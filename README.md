# Three-Tier DevSecOps Application Deployment on AWS EKS

## Project Overview

This repository demonstrates how to deploy a **three-tier full-stack application** using a **DevSecOps architecture on AWS**. The project focuses on building an automated pipeline that handles infrastructure provisioning, application containerization, security scanning, continuous integration, GitOps-based deployment, and monitoring.

The entire system is designed to reflect how modern production environments deploy and manage scalable applications using cloud-native technologies.

---

## Architecture Concept

The project follows a **three-tier architecture**:

- **Frontend Layer** – User interface of the application.
- **Backend Layer** – Application logic and APIs.
- **Database Layer** – Data storage.

These components are containerized and deployed on a **Kubernetes cluster (AWS EKS)**, enabling scalability, reliability, and easier management.

---

## Tech Stack

### Cloud Platform

- **AWS** – Provides cloud infrastructure and managed services.
- **Amazon EKS** – Kubernetes service used to run and manage containers.
- **Amazon ECR** – Container registry used to store Docker images.

### Infrastructure as Code

- **Terraform**
  - Used to provision AWS infrastructure.
  - Automates creation of cloud resources.
  - Ensures reproducible and version-controlled infrastructure.

### Containerization

- **Docker**
  - Packages applications into containers.
  - Ensures consistent environments across development and production.

### CI/CD Pipeline

- **Jenkins**
  - Automates build and deployment pipelines.
  - Builds Docker images.
  - Pushes images to Amazon ECR.
  - Triggers deployment processes.

### Security (DevSecOps)

- **Trivy**
  - Scans Docker images for vulnerabilities.
- **SonarQube**
  - Performs static code analysis.
  - Detects bugs, code smells, and security issues.

### GitOps Deployment

- **ArgoCD**
  - Automates Kubernetes deployments using Git repositories.
  - Ensures the cluster state matches the declared configuration.

### Monitoring & Observability

- **Prometheus**
  - Collects metrics from Kubernetes and applications.
- **Grafana**
  - Visualizes monitoring metrics through dashboards.

---

## Project Purpose

This project demonstrates how to build a **complete DevSecOps workflow** for deploying a cloud-native application. It integrates infrastructure automation, CI/CD pipelines, security scanning, GitOps deployment, and monitoring into a single automated system.

---

## Key Concepts Demonstrated

- Three-tier application architecture
- Infrastructure as Code with Terraform
- Containerization using Docker
- CI/CD automation with Jenkins
- Security scanning in DevSecOps pipelines
- GitOps deployment using ArgoCD
- Kubernetes-based application deployment
- Monitoring and observability with Prometheus and Grafana
