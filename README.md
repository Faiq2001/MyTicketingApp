# Project Setup Guide

This guide will help you set up and run the project locally using Docker Desktop, Kubernetes, and Skaffold.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Skaffold](https://skaffold.dev/)

## Getting Started

## 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/yourproject.git
cd yourproject
```

## 2. Install Docker Desktop

Download and install Docker Desktop from the [official Docker website](https://www.docker.com/products/docker-desktop).

## 3. Enable Kubernetes in Docker Desktop

1. Open Docker Desktop.
2. Go to **Settings** (or **Preferences** on macOS).
3. Select the **Kubernetes** tab and check the box labeled **Enable Kubernetes**.
4. Click **Apply & Restart** if prompted.

> **Note**: Ensure that Kubernetes is running in Docker Desktop after enabling it.

![Kubernetes Settings](k8s%20setup%20image.jpeg) 

## 4. Install Skaffold

### For Windows:

1. Download the Skaffold binary from the [Skaffold website](https://skaffold.dev/docs/install/#standalone-binary).
2. Place `skaffold.exe` in a new folder, for example: `C:\Program Files\Skaffold\`.
3. Add this folder to your system’s PATH variable:
   - Open **System Properties**.
   - Go to the **Advanced** tab and click **Environment Variables**.
   - Under **System Variables**, find the **Path** variable, select it, and click **Edit**.
   - Add the path to the Skaffold folder (`C:\Program Files\Skaffold\`) and click **OK**.

### For macOS:

1. Download the Skaffold binary from the [Skaffold website](https://skaffold.dev/docs/install/#standalone-binary).
2. Place the `skaffold` binary in a directory, for example: `/usr/local/bin`.
3. Add this directory to your PATH (if not already done):
   - Open a terminal.
   - Run the command:

     ```bash
     export PATH=$PATH:/usr/local/bin
     ```

4. To make this change permanent, add the line above to your shell profile (e.g., `~/.bashrc`, `~/.zshrc`, or `~/.bash_profile`), and then source the file:

   ```bash
   source ~/.bashrc  # or ~/.zshrc, depending on your shell
   ```

### For Linux:

1. Download the Skaffold binary from the [Skaffold website](https://skaffold.dev/docs/install/#standalone-binary).
2. Place the `skaffold` binary in a directory, for example: `/usr/local/bin`.
3. Add this directory to your PATH (if not already done):

   - Open a terminal.
   - Run the following command:

     ```bash
     export PATH=$PATH:/usr/local/bin
     ```

4. To make this change permanent, add the line above to your shell profile (e.g., `~/.bashrc` or `~/.zshrc`), and then source the file:

   ```bash
   source ~/.bashrc  # or ~/.zshrc, depending on your shell


## 5. Start the Project

Once the prerequisites are in place, use Skaffold to start the project.

1. Open a terminal (Command Prompt or PowerShell) in the project directory.
2. Run the following command to start the application with Skaffold:

   ```bash
   skaffold dev
