# Notes on Udemy microservices with Node JS and React

### cluster

is a collection of nodes and a master to manage them

### node

is like a virtual machine. When running locally we typically only have one node running. When deploying to the cloud we will have more than one node. Used to run our containers

### Pod

are pretty much the same thing as a container, even though they’re NOT. More or less a running container. Tech a pod can run multiple containers

### Deployment

is in charge running correct number of pods and making sure they’re available. Monitors a set of pods and makes sure they are running and restarts when needed. Can take care of updating new versions of applications running on a pod

### Service

gives access to running pods within our cluster. If pod A wants to make a call to pod B it makes a call to the service and the service acts as a proxy. Provides an easy to remember URL to access a running container.

---

## Type of kubernetes Service this is a test

### Cluster IP

-> setsup easy to remember url to access a pod. Only exposes pod IN THE CLUSTER.

### Node Port

-> makes a pod accessible from out the cluster, usually only for dev

### Load Balancer

-> makes a pod accessible from outside the cluster. This is the right way to expose a pod to the outside world.
