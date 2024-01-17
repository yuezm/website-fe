---
title: Example Guide
description: A guide in my new Starlight docs site.
---

图形学就是将真实世界的物体渲染至计算机中。

图形学和计算机视觉的区别

**图形学**: 将准备好的模型渲染为图片
**计算机视觉**: 利用计算机去**猜测**图片，从而将图片转换为模型。

## Linear Algebra(线性代数)

### Coordinate(坐标系)

坐标系分为很多种，例如笛卡尔坐标系，裁剪坐标系，世界坐标系等等。目前主要了解笛卡尔坐标系和裁剪坐标系，且如果在未说明的情况下，默认遵守**右手螺旋定则**，拿计算机屏幕来说

- 原点在屏幕中心，视为 $\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
- X 轴为水平轴，从原点向右为正，向左为负
- Y 轴为竖直轴，从原点向上为正，向下为负
- Z 轴为垂直屏幕，从原点向屏幕外为正，向屏幕内为负

裁剪坐标系和其他坐标系有所区别，它的最大值为 1.0，最小值为-1.0，即其他坐标系需要按照比例缩放至该值

### Vector(向量)

向量的作用：描述**值**和**方向**

**单位向量**: 值为 1 的向量，只用来描述方向

#### Dot Product(点乘)

两个向量点乘，可以生成一个新的**数**，且向量的点乘，满足于交换律，分配律，结合律

$\vec{x} · \vec{y} = ||x|| * ||y|| * \cosθ$

- $θ$ 为两个向量的夹角

也可以通过坐标系来计算

$\begin{pmatrix}
x_1 \\
y_1 \\
z_1
\end{pmatrix}
·
\begin{pmatrix}
x_2 \\
y_2 \\
z_2
\end{pmatrix} = x_1*y_1 + y_2*y_2 + z_1*z_2$

1. 可以用计算两个向量的夹角 $θ$（反余弦函数）
   1. 判断两个向量是否同向：值为正，则为同向；否则为反向
   2. 判断两个向量是否靠近：值越大，则越接近
2. 可以求向量的分解，例如计算 $\vec{x}$ 到 $\vec{b}$ 的投影

#### Cross Product(× 乘)

x 乘，生成了另一个向量，方向为垂直于 a,b 向量的平面，以**右手螺旋定责，四指指向 a 向量旋转至 b 向量的方向，拇指即为新向量方向（X x Y，则旋转方向是由 X 旋转到 Y）**。向量的长度为如下公式

$||\vec{x} \times \vec{b} || = ||a|| * ||b|| * \sinθ$

- $θ$ 为两个向量的夹角

向量的 x 乘，并**不满足于交换律**，按照右手螺旋定则，如果产生交换的话，新的向量方向是相反的，但任然存在分配律和结合律

1. 可以用来定义三位坐标体系
2. 可以用来判断 $\vec{x}$ 在 $\vec{y}$ 的左侧还是右侧。例如可以检测多边形是凹还是凸
3. 判断包含关系。例如可以用来判断 1 个点 a，在由 3 个点组成的三角形内还是外

### Matrix(矩阵)

矩阵以$(M,N)$ 来表示，M 行 N 列。

矩阵加减法必须满足都是$(M,N)$，$M3[i][j] = M1[i][j] \plusmn M2[i][j]$

矩阵比较重要的应用是乘法，但乘法必须满足该条件 $(M,N)(N,P) = (M,P)$。即一个 M 行 N 列的矩阵乘以 N 行 P 列的矩阵，最终为 M 行 P 列。

矩阵 M1 乘以 M2 = M3，M3[i][j] 的值为 M1[i]（M1 的第行） 点乘 M2[j]（M2 的第 j 列）

$\begin{bmatrix}
x_1 \\
y_1 \\
z_1
\end{bmatrix}
\begin{bmatrix}
x_2 & y_2 & z_2
\end{bmatrix} =
\begin{bmatrix}
x_1*x_2 & x_1*y_2 & x_1*z_2 \\
y_1*x_2 & y_1*y_2 & y_1*z_2 \\
z_1*x_2 & z_1*y_2 & z_1*z_2
\end{bmatrix}$

1. 可以用来进行变换

### Transform 变换

#### Linear Transformation(线性变换二维)

可以通过矩阵乘法直接完成的变换操作

**Scale(缩放)**: $S_x$, $S_y$ 为缩放因子

$\begin{bmatrix}
S_x & 0  \\
0 & S_y  \\
\end{bmatrix}
\begin{bmatrix}
x_1  \\
y_1  \\
\end{bmatrix}=
\begin{bmatrix}
x_2  \\
y_2  \\
\end{bmatrix}$

**Rotate(旋转)**: 绕着**原点**，方向为**顺时针**旋转，$θ$为旋转角度

$\begin{bmatrix}
\cosθ & -\sinθ \\
\sinθ & \cosθ
\end{bmatrix}
\begin{bmatrix}
x_1  \\
y_1
\end{bmatrix}=
\begin{bmatrix}
x_2  \\
y_2
\end{bmatrix}$

**Shear(切变)**: 沿着 X 正方向，例如将一个矩形拉成平行四边形，切变移动 $\alpha$

$\begin{bmatrix}
1 & \alpha \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
x_1  \\
y_1
\end{bmatrix}=
\begin{bmatrix}
x_2  \\
y_2
\end{bmatrix}$

#### Nonlinear Transformation(非线性变换)

**Transform(平移)**: 平移是无法通过一个矩阵乘法计算而得，而是需要通过加法

$\begin{bmatrix}
x_1 \\
y_1
\end{bmatrix} \
\ -
\
\begin{bmatrix}
  t_x \\
  t_y
  \end{bmatrix}=
  \begin{bmatrix}
  x_2 \\
  y_2
  \end{bmatrix}$

所以想要将所有变化统一为一种表示方法，即用坐标乘以矩阵的形式，目前是做不到的，引入了**齐次坐标**

#### Homogeneous Coordinate(齐次坐标)

引入了一个额外的参数，即二维需要三个参数，三维需要四个参数
$\begin{pmatrix}
x \\
y \\
w
\end{pmatrix}$

$\begin{pmatrix}
x \\
y \\
z \\
w
\end{pmatrix}$

齐次坐标表示一个向量（二维）

$\begin{pmatrix}
x \\
y \\
0
\end{pmatrix}$

齐次坐标表示一个点（二维）

$\begin{pmatrix}
x \\
y \\
1
\end{pmatrix}$

**且当 w 不为 1 的时候，需要将坐标标准化，即会**
$x = x \ w \\
y = y / w$

借助齐次坐标，可以表示平移，x 平移$T_x$，y 平移$T_y$

$\begin{bmatrix}
1 & 0 & T_x \\
0 & 1 & T_y \\
0 & 0 & 1 \\
\end{bmatrix}$

当前其他的变换矩阵同样也可以以齐次坐标表示，例如缩放

$\begin{bmatrix}
S_x & 0 & 0 \\
0 & S_y & 0 \\
0 & 0 & 0 \\
\end{bmatrix}$

#### 复杂变换

目前的变换都是根据原点计算而得，那么如何计算物体绕着其他的点旋转呢，例如如何计算物体绕着自身中心旋转呢

1. 将旋转中心平移到原点，物体也需要随之平移
2. 执行旋转操作
3. 将旋转中心平移回原位，物体也需要随之平移

借助矩阵的分配律，可以先将次变换的矩阵先行计算出来，最后再去乘坐标，以减少冗余计算

如果同时存在多个运动，常用的计算方式是 **缩放 --> 旋转 --> 平移** 依次计算（缩放，旋转，平移的计算顺序比较符合人的直观感受）

## View Transformation(视图变换)

可以将图形学想象一次毕业合照，人群代表了准备好的模型，摄像机同为摄像机。那么拍一次毕业照需要经过如下步骤

1. 人群站好自己的位置: 可以类比为准备好一堆模型（模型变换）
2. 摄影师站好自己的位置: 可以类比为准备好相机（视图变换）
3. 按下快门进行拍摄: 可以类比为进行一次投影（投影变换）
4. 打印图片: 可以类比为进行一次光栅化，将 3D 的模型显示在 2D 屏幕上

根据物理的概念**相对位置**可以知晓，如果相机和模型的相对位置不变，无论他们处于什么位置，拍摄出来的照片肯定都是一致的。所以我们可以固定相机的位置，想拍摄不同的照片的话，就移动模型的位置

我们通过三个向量来描述相机的位置

1. 相机的位置
2. 相机的拍摄方向
3. 相机向上的方向

![](https://cdn.nlark.com/yuque/0/2023/webp/262797/1700665405694-d6bcae68-50e7-4b9d-828f-8548ad47f2cf.webp#averageHue=%23f9f9f9&clientId=ucdd12f43-a06e-4&from=paste&height=379&id=u6fab4df1&originHeight=505&originWidth=650&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue63f63aa-d188-4114-b806-ec8d1abe2bc&title=&width=488)

默认相机的位置在**原点，**默认拍摄方向为 **-Z，**相机向上的方向为**+Y**

那么如果相机的位置不在原点或者向上的位置不在+Y 该怎么办呢？借助前面的所说的变换，例如不在原点，可平移至原点；向上方向不是+Y，可旋转至该方向

## Projection(投影)

投影就是将 3D 物体投射到 2D 平面上的过程，主要分为**正交投影**和**透视投影**
![](https://cdn.nlark.com/yuque/0/2023/webp/262797/1700665706108-9634edf8-b2f8-4413-a829-525370070728.webp#averageHue=%23f6f4f2&clientId=ucdd12f43-a06e-4&from=paste&height=298&id=u450d15c3&originHeight=397&originWidth=758&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud58cf6f8-f9cf-44e7-95bf-f5302f19818&title=&width=569)

### Rectangular Projection(正交投影)

认为光源是从很远的方向打来，是以**平行光**的方式照射物体，由于是平行光，则不会出现近大远小的情况，而是同样的大小。主要用于绘图等。

如何处理正交投影，分为如下两个步骤

1. 平移: 由于正交投影是不会改变物体大小的，所以可以直接将投影移动到屏幕上
2. 缩放: 将投影后的图形缩放为**标准图形**

**标准图形**: 在 X,Y,Z 方向都为 1 的立方体

### Perspective Projection(透视投影)

认为光源是一个点光源，则在投影的过程中，则会出现近大远小的情况，用于模拟人的眼睛去看物体。可以想象两条铁轨，铁轨是不会相交的，但是眼睛看来，在远处铁轨相交了

如何处理透视投影呢，透视投影的矩阵如下所示，接下来推导求值的过程

$\begin{bmatrix}
A & B & C & D \\
E & F & G & H \\
I & J & K & L \\
M & N & O & P\\
\end{bmatrix}$

透视投影可以根据小孔成像来解释和计算
![perspective.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/262797/1688308426660-38cd4370-cbcb-4208-a804-3ceccc20ae98.jpeg#averageHue=%23f9f9f9&clientId=u6e724c69-f1f7-4&from=paste&height=454&id=ue81eb568&originHeight=908&originWidth=1936&originalType=binary&ratio=2&rotation=0&showTitle=false&size=144087&status=done&style=none&taskId=u8093a969-6871-41fc-b5d6-4e78b9a80ca&title=&width=968)

根据小孔成像，一个物体经过小孔成像后，影像是倒立的，不便于计算，在图形学中，可以通过将影像往前移动，移动到和小孔成像距离相同的位置，则可以得到一个方向和原物体一致，且大小和小孔成像一样大小的投影

设原物体坐标(齐次坐标)为

$\begin{pmatrix}
x \\
y \\
z \\
1
\end{pmatrix}$

根据相似三角形的原理，原物体的点 x,y 投影后的位置

$y' = \frac{y * AB}{AC}$

将 AB 距离记为 n。AC 的距离为已知，且由于相机的位置总是在原点，确朝向的是 -Z 的方向，则 AC 的坐标 Z 的方向是**负的**，则上述公式可记为。且同理 x' 坐标也是一样的

$y' = \frac{y * n}{-z}$

$x' = \frac{x * n}{-z}$

利用齐次坐标，将除以 -z 的操作，转换为将 w 的值赋予 -z，根据上述公式可以推断出 x,y 行对应的矩阵值

$\begin{bmatrix}
n & 0 & 0 & 0 \\
0 & n & 0 & 0 \\
I & J & K & L \\
0 & 0 & -1 & 0 \\
\end{bmatrix}$

对于 z 坐标，由于需要映射到$[-1,1]$的区间，则 z 的公式按照矩阵可以得出

$\frac{z'}{w} = \frac{I * x + J * y + K * z + L}{-z}$

由于 H 和 I 是 x,y 的坐标，不会对 z 产生影响，则 H,I 为 0

公式为

$\frac{z'}{w} = \frac{ K * z + L}{-z}$

矩阵值为

$\begin{bmatrix}
n & 0 & 0 & 0 \\
0 & n & 0 & 0 \\
0 & 0 & K & L \\
0 & 0 & -1 & 0 \\
\end{bmatrix}$

由于在最 Z 轴的最近端映射到-1，最远段映射到 1

$1 =  \frac{ K * f + L}{-(-f)}\\
 -1 =  \frac{ K * n + L}{-(-n)}$

- f: 表示 Z 轴可见的最远 d 位置
- n: 表示 Z 轴可见的最近的位置

解出该二元一次方程组，可得 K、L

$\begin{bmatrix}
n & 0 & 0 & 0 \\
0 & n & 0 & 0 \\
0 & 0 & -\frac{f+n}{f-n} & -\frac{2f*n}{f-n} \\
0 & 0 & -1 & 0 \\
\end{bmatrix}$

此矩阵未对 X、Y 轴进行裁剪，对 X、Y 裁剪的话，可以指定投影面上下左右的边界值，然后对其进行一次缩放平移操作，但是实际操作中，很少会直接定义投影面的上下左右边界，而是定义**视角**，根据**视角大小**和 **n**，以及**长宽比**，我们可以自行计算投影面的边界。这也是很多库中的 lookAt 的传参

## Rasterization(光栅化)

光栅化其实就是将物体显示（绘制）在屏幕上

### 屏幕

什么是屏幕？一种典型的光栅化设备，有如下特点

老式的 **CRT 屏幕**是由电子激发荧光屏发光。针对整个屏幕来说，从左上角开始到右下角进行一次线性扫描，就可显示出图像，当每秒经过多次扫描后，即可形成视频。由于荧光屏只有发光和不发光两种状态，则只能显示黑白色

**Pixel(像素)**: 基本显示单元，一般认定一个像素在单位时间只显示一种颜色（虽然事实不是这样，和显示器的排列有关，但可以近似的去理解），每一个像素点可以通过 Red、Green、Blue 来合成显示其他的颜色

将像素和屏幕综合起来看的话

1. 以`(x, y)`来描述一个像素
2. 像素的范围由`(0, 0)~(width -1, height-1)`，即覆盖的是整个屏幕
3. 每一个像素的中心电视`(x+0.5, y+0.5)`

**现代显示器**从左上角到右下角是由无数个像素组成（每英寸的像素点的个数即为分辨率），由无数个像素点来组成一张图片。现代显示器在内存（显存）开辟一块存储区域 Frame Buffer，用于映射到屏幕，简单来说屏幕怎么显示是受 Frame Buffer 控制的

常用的有如下分类

1. LCD(液晶显示器)
2. LED(发光二极管)
3. OLED
4. Electronic Ink(电子墨水)：通过电来控制白色墨水（显示白色）在上还是黑色墨水在上（显示黑色）

### Sampling(采样)

那么如何能在屏幕上显示一个完整的图形呢？例如在屏幕中间显示一个三角形

最简单的方法就是，**遍历**屏幕的每一个像素点，如果三角形占据了该像素点，那么这个像素点就发光，反之则不发光，这就是**采样**
![sampling_triangle.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/262797/1688309485781-2f5199b1-b698-44c6-a2a5-9b71cbafa834.jpeg#averageHue=%23ecdcda&clientId=uf1187afc-2676-4&from=paste&height=375&id=uc7282497&originHeight=750&originWidth=1364&originalType=binary&ratio=2&rotation=0&showTitle=false&size=439917&status=done&style=none&taskId=u72dc52fe-4c3e-447b-839c-37b63090237&title=&width=682)

1. 如何判断三角形是否占据了该像素点: 知道三角形的三个顶点，知道像素点，可以用上面提到过的，向量的 Cross Product，
2. 有的像素点被三角形只占据了部分怎么办: 我们可以暂定这种没有完全占据的像素点不发光

当然，我们这个三角形并非充满了整个屏幕，所以遍历整个屏幕的像素点比较浪费性能，所以我们只需要遍历此三角形的 **Bounding Box(包围盒)** 即可，而不用遍历整个屏幕

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688309879211-5a7b0e17-145a-41dc-a94c-b07721911fed.png#averageHue=%23eaedec&clientId=uf1187afc-2676-4&from=paste&height=540&id=u645d2a39&originHeight=1080&originWidth=1216&originalType=binary&ratio=2&rotation=0&showTitle=false&size=763007&status=done&style=none&taskId=u7bf21955-4b95-42f1-8ba1-282658879c3&title=&width=608)

### Aliasing(采样瑕疵、走样)

拿我们上边采样来说，三角形的边不可能完美的按照像素排列，所以肯定有的像素点并没有被三角形完全占据，无论我们定义这部分的像素发光与否，最终都会形成如下

![sampling.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/262797/1688309496179-7b47faa1-6b05-4ad6-b93f-e14d498a8548.jpeg#averageHue=%23efbeb5&clientId=uf1187afc-2676-4&from=paste&height=595&id=u196796e6&originHeight=1190&originWidth=1306&originalType=binary&ratio=2&rotation=0&showTitle=false&size=261194&status=done&style=none&taskId=uf5ff0064-9e1a-46ba-a22d-44b63f26409&title=&width=653)

可以看待这里存在明显的锯齿，这就是采样瑕疵。生活中也有许多采样瑕疵，举个例子

1. 锯齿
2. 摩尔纹
3. 车轮效应

### Anti-Aliasing(反走样)

常用的反走样有很多方式，以下简单列举下

1. 增加采样率，即将像素点分的足够小，足够密集，人眼则无法观看到锯齿
2. 超采样
3. **抗锯齿**，目前常用的

抗锯齿的处理步骤如下

1. 模糊处理: 先将图片模糊处理
2. 对每个像素进行采样

那么如何对图片进行模糊处理呢？

在时域上的一张图片，可以根据傅里叶变换，变换为一张频域的照片，再去掉高频的（相差很大的），再经过逆傅里叶变换，则可以获得一张模糊的图片，整个操作称为**滤波**。在实际操作中，使用一个卷积核去**卷积**三角形的每个像素

滤波：删除特点的频率

1. 高通滤波：只显示高频的信息，即锐化
2. 低通滤波：只显示低频的信息，即模糊化

这里的 **卷积** == **滤波** == **平均**
![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688309936080-9ea3c39d-d845-40cc-9ce7-63354d61b77b.png#averageHue=%23ccc9c8&clientId=uf1187afc-2676-4&from=paste&height=461&id=ud8f53357&originHeight=922&originWidth=1458&originalType=binary&ratio=2&rotation=0&showTitle=false&size=552739&status=done&style=none&taskId=u9f79d18e-1a1d-47f0-bbff-cffa9bd630e&title=&width=729)
那么如何对每个像素进行采样呢？例如对某个像素点，三角形占用大部分和占用小部分时颜色该如何计算呢？
假设在一个像素内，该三角形占 25%，则此处颜色为 25% 的三角形颜色，如果占 50%，则此处颜色为 50% 三角形的颜色，依次类推。但是这种得到占比的算法非常复杂，虽然得到精确的占有率非常困难，但是可以使用一个较为简单的方法来得到近似解

**MSAA(超采样抗锯齿)**，在一个像素内多增加一些采样点，例如将一个像素变成 4 个采样点，再分别计算每个采样点是否被三角形覆盖，最终合一起就是一个像素的近似数据。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688309967464-b51e01b3-91aa-4d70-bc2f-cc4c837fe16e.png#averageHue=%23f3f2f1&clientId=uf1187afc-2676-4&from=paste&height=450&id=u41fe426f&originHeight=900&originWidth=1466&originalType=binary&ratio=2&rotation=0&showTitle=false&size=348531&status=done&style=none&taskId=u566bed22-4f2c-457e-82e9-13948a2b771&title=&width=733)

## 可见性

当两个物体出现遮挡时，原则上必然是近处的物体遮挡远处的物体，那么在绘制时如何判断

### 画家算法

根绘画的经验，先绘制远处的，再绘制近处的，然后近处的物体则会覆盖掉远处的。画家算法优点是比较简单，但是无法处理较为复杂的情况，例如当物体出现交叉，则回家算法无法准确绘制
![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688310249080-a5026784-7f56-40a1-b6de-c04c45d702b7.png#averageHue=%23fcfcfc&clientId=uf1187afc-2676-4&from=paste&height=463&id=u21cd361d&originHeight=926&originWidth=1256&originalType=binary&ratio=2&rotation=0&showTitle=false&size=227442&status=done&style=none&taskId=ua7b552d0-e35e-4cb9-8ac8-39e62a56533&title=&width=628)

### Z-Buffer(深度测试)

#### 深度图

储存每个像素对应的最浅的深度。使用 Z-Buffer 来保存每一个像素点的最浅的深度信息，当对图形的某个像素点绘制时，比较图形在当前像素点的深度和 Z-Buffer 存储的深度（请注意此处用的是深度，由于物体总是处于-Z 轴，取深度的需要注意正负号）

- 图形在当前像素点的深度 < Z-Buffer 存储的深度: 渲染当前图形，并更新 Z-Buffer
- 不做操作

在极端情况下，Z-Buffer 值相同该如何处理呢？如果 Z-Buffer 相同，则很容易出现一些闪烁的问题(**Z-Fighting**)，可以采取如下方式解决

1. 使用精度更高的 Z-Buffer。例如原来 Z-Buffer 保存 24 位，可以调整为保存 32 位
2. 避免将图形放在非常非常近的面上
3. 可以将图形偏移(Polygon Offse)。渲染前将图形微小偏移

#### 结果图

储存最终的结果

## Shading(着色)

对不同物体应用不同的材质(Material)

### Blinn-Phone Reflectance Model(Blinn-Phone 反射模型)

1. Specular highlights(高光)
2. Diffuse reflection(漫反射)
3. Ambient lighting(间接/环境光)

##### Diffuse reflection(漫反射)

漫反射有如下特点

1. 受光源的距离影响。物体离光源越远，则光线强度越弱，由于光线照射为一个球，设在单位距离的光照强度为$I_0$,则在距离光源距离 r 的位置强度公式为

$I_1=I_0 * (4\pi / 4\pi r^2) \\
 = \\
I_1=I_0 / r²$

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688312343233-13f13576-ffb2-435d-81f9-adebd27c63aa.png#averageHue=%23fcfcf8&clientId=uf1187afc-2676-4&from=paste&height=272&id=u952992fa&originHeight=1086&originWidth=1546&originalType=binary&ratio=2&rotation=0&showTitle=false&size=462104&status=done&style=none&taskId=uc69ad4ab-db4d-489d-aed0-146fbc4b7e1&title=&width=387)

2. 受光线入射方向、物体法线影响。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688312318077-4c5f1e27-fdc0-44d3-a0b8-3f73e47d08c4.png#averageHue=%23fafaea&clientId=uf1187afc-2676-4&from=paste&height=192&id=u8aaa8827&originHeight=768&originWidth=1496&originalType=binary&ratio=2&rotation=0&showTitle=false&size=329669&status=done&style=none&taskId=u055dab83-0617-400a-a94c-69c824ba85f&title=&width=374)

3. 受物体本身影响。物体把不能吸收的都反射出去了，然后眼睛看起来就是这个颜色
4. 漫反射想象为一束光照射到物体上，均匀的反射到各个方向，即各个观察角度观察到的光是一样的

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688312650780-ce8d117f-1575-48ff-81dd-efb105e15838.png#averageHue=%23fbfbfb&clientId=uf1187afc-2676-4&from=paste&height=214&id=ued562cbf&originHeight=856&originWidth=1520&originalType=binary&ratio=2&rotation=0&showTitle=false&size=275940&status=done&style=none&taskId=ub0d3bcb4-b3e6-4308-a0bc-c00440621e7&title=&width=380)
$L_d = k_d(I / r^2)max(0, \vec{n} · \vec{l})$

- $L_d$可以被观察到的漫反射的光
- $k_d$ 漫反射系数，表示的单位区域会反射哪种颜色
- $I$ 表示光源在单位距离的能量
- $r$ 表示单位区域距离光源的距离
- $n$ 表示单位区域的法线向量
- $l$ 表示单位区域到光源的向量

##### Specular highlights(高亮、镜面反射)

1. 受光源距离的影响
2. 受光线入射方向、物体法线、**观察方向**影响，由于是镜面反射，则法线方向必须是**入射方向和观察方向**组成的角的**角平分线**
3. 受物体本身影响

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688313116182-3763ed90-cc40-48d5-93d1-372b975bdbfd.png#averageHue=%23fafafa&clientId=uf1187afc-2676-4&from=paste&height=190&id=u4d27deac&originHeight=760&originWidth=1506&originalType=binary&ratio=2&rotation=0&showTitle=false&size=280928&status=done&style=none&taskId=u5f036eb9-7070-4365-9566-dfd4c4a1bca&title=&width=377)
$L_s = k_s(I/r^2)max(0,\vec{n} · \vec{h})^p$

- $L_s$可以被观察到的镜面反射光
- $k_s$ 镜面反射系数
- $I$ 表示光源在单位距离的能量
- $r$ 表示单位区域距离光源的距离
- $n$ 表示单位区域的法线向量
- $h$ 表示单位区域到光源、单位区域到相机的半程向量
- $p$ 由于$\cosθ$变换区间太小了，使用幂来增大变化区间

##### Ambient lighting(环境光)

环境光非常难于计算，所以认为环境光是四面八方照射而来，且与入射方向，法线，观察方向无关

1. 受光源影响
2. 受物体本身影响

$L_a = k_a I_a$

- $L_a$可以被观察到的环境光
- $k_a$ 环境光系数
- $I_a$ 表示光源在物体的能量

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688313401450-544c77f6-cbcc-402e-b2c2-f8d8c9f66f54.png#averageHue=%23fcfcfc&clientId=uf1187afc-2676-4&from=paste&height=184&id=u57c2c5da&originHeight=736&originWidth=1358&originalType=binary&ratio=2&rotation=0&showTitle=false&size=170374&status=done&style=none&taskId=u41249a0e-fa3c-4257-a0d2-57a2ed30876&title=&width=340)

##### 总公式为

$L = L_d + L_s + L_a$

### Shading Frequencies(着色频率)

着色到底应用于那些点

- Flat Shading 着色于一个平面
- Gouraud Shading 着色于每一个顶点
- Phone Shading 着色于每一个像素

一般来说，着色频率越高，效果越高，计算量也更大。但事实无绝对，并非是 Flat Shading 效果就一定差，当物体的面足够多，分得足够细，效果也是非常好的

目前 webGL 着色频率为 Gouraud Shading（顶点着色器） + Phone Shading（片元着色器根据顶点着色器算每个像素的差值）

### 如何去计算一个顶点的法线

如果一个顶点在正方体上，就比较好计算，那如果在复杂图形中呢。在复杂图形中，取顶点周围的面的法线，进行加权平均

那如何计算一个面的法线呢，这就要用到**向量的 × 乘**了，取一个面上的三个点，两两组成向量，× 乘即可获取平面的法线（右手螺旋定则）
![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1689582941589-ed2afef6-ae30-42f5-940b-a991c901d609.png#averageHue=%23f6f6f6&clientId=u5ff1277d-1888-4&from=paste&height=374&id=u331c980c&originHeight=748&originWidth=1204&originalType=binary&ratio=2&rotation=0&showTitle=false&size=447397&status=done&style=none&taskId=u1b04cd6b-c68a-4314-bf10-43a1c6d7033&title=&width=602)

## Real-time Rendering Pipeline(实时渲染管线)

目前渲染管线都是在 GPU 中被编程完成了，只有顶点处理和片段处理可以编程。整个步骤如下

1. 输入空间中一系列的点
2. 顶点处理
3. 三角形处理
4. 光栅化
5. 着色
   1. 片段（像素）处理
   2. 帧缓冲区处理
6. 输出

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688313927614-ce96628c-40b6-41f1-a77c-0b38f1762e53.png#averageHue=%23f4eed9&clientId=uf1187afc-2676-4&from=paste&height=472&id=u39055156&originHeight=944&originWidth=1436&originalType=binary&ratio=2&rotation=0&showTitle=false&size=550400&status=done&style=none&taskId=u5f6e2541-22eb-457a-9603-151329216a2&title=&width=718)

由于这些计算互相无关，则非常适合 GPU 的并发，所以看似计算量很大，确可以快速计算完成

## Texture Mapping(纹理映射)

定义某个点的基本属性。三维上的点可以被映射到纹理坐标系中（UV 坐标、ST 坐标）
![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1688314179264-5e856d38-238f-4ca0-99a2-449c3b04b5cd.png#averageHue=%23cac078&clientId=uf1187afc-2676-4&from=paste&height=422&id=u30657f8e&originHeight=844&originWidth=1388&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1641445&status=done&style=none&taskId=uf9dd6b32-a7b7-4e02-854f-c5bd055f091&title=&width=694)

### 线性插值及应用

为什么会需要插值？为了获取平滑的过度效果
有哪些需要插值？纹理，坐标系，法向量

例如一个三角形，知道三角形的顶点，则三角形内任意一点都可通过三个点的插值计算而得
![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1703514126405-233e18cc-e8ef-42a5-8a51-8798a88486cd.png#averageHue=%23fbfafa&clientId=u26d6f8cd-a8b8-4&from=paste&height=451&id=ubcaada7f&originHeight=790&originWidth=1242&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=256094&status=done&style=none&taskId=uab1f4dcd-4998-4d4e-a741-173cecc797c&title=&width=709.7142857142857)

#### 应用材质

将各个顶点，通过重心坐标映射到 UV 坐标内，UV 坐标对应的值，就是漫反射系数$k_d$

##### 问题 1 纹理太小如何处理

当纹理太小了，不同的顶点映射的 UV 值不会是正好一个像素位置，例如可能映射为 (1.2,3,2)的像素位置。此时可以采用双线性插值或者三重线性插值，下图为双线性插值
![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1703514628411-91492aef-cae3-4ad4-abb4-186607643e64.png#averageHue=%23f7f3f2&clientId=u26d6f8cd-a8b8-4&from=paste&height=425&id=dYr8v&originHeight=744&originWidth=1302&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=430844&status=done&style=none&taskId=ubb7b5312-8e7f-44ab-9179-fb1a6030ccd&title=&width=744)

##### 问题 2 纹理太大如何处理

纹理过大，会造成模糊，近处出现锯齿，远处出现摩尔纹。使用**MinMap**来解决**，**在不同分辨率下，提供不同的纹理

1. Level0 是原始的纹理图像，每提高一个 Level，则分辨率缩小一倍，利用相邻的四个像素进行平均
2. MinMap 会需要额外的 1/3 存储空间

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1703514946099-97eebf67-bd5e-4d31-a9db-19929655733f.png#averageHue=%23f9f9f9&clientId=u26d6f8cd-a8b8-4&from=paste&height=372&id=u3b414de9&originHeight=651&originWidth=1228&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=307249&status=done&style=none&taskId=u91de2ae4-b1aa-48ff-9d16-d4b754a7032&title=&width=701.7142857142857)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1703515012173-972c4c95-645a-4c28-a474-87345c6ad9f2.png#averageHue=%23dee3e3&clientId=u26d6f8cd-a8b8-4&from=paste&height=417&id=uce3a9995&originHeight=729&originWidth=1241&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=1072618&status=done&style=none&taskId=ue22ec35c-f942-40aa-a953-731163fdbd8&title=&width=709.1428571428571)

##### 过渡不平滑

使用 MinMap 会导致过度不平滑的问题，因为在 3D 中，由于计算而得不会恰好属于某一个层级，例如值可能为 1.2 曾。可采用**三线性插值，**即在两层 MinMap 先做双重线性插值，然后两层 MinMap 再做线性插值

##### 过度模糊

使用 MinMap 可能会造成远处模糊，因为贴图基本为矩形，而 3D 中由于视角的问题，有可能是矩形，被拉伸，被压扁等等，导致如果在按照矩形去计算纹理的话，就会很模糊。使用**多项异性过滤**，即对 X,Y 采用**不同比例的压缩**

### 纹理映射的应用

纹理 = 内存 + 查询。纹理的数据会存储于内存中，我们可以对内存进行范围查询

#### 球面环境映射

将环境光反射到球面

#### 球面映射

将球面映射展开为平面，此时平面会出现扭曲

#### 立方体映射

将环境光反射至正方图

#### 凹凸贴图

以贴图来展示凹凸，而不用改变几何本身

#### 三维纹理

## Geometry(几何)

### 几何的表示方法

#### 隐式

通过公式描述一个图形，例如$f(x,y,z) = 1$无需描述每一个点的位置。例如圆球的公式为$x^2 + y^2 + z^2 = 1$

优点

1. 判断点是否属于图形较为容易

缺点

1. 难以通过公式判断出图形的形状

#### 显示

描述每一个点的位置。例如点云，多边形网格等待
优点

1. 通过点可以判断出图形的形状

缺点

1. 难以判断点是否属于图形，需要遍历所有的点

存储，表示一个几个图形，需要存储如下数据

1. 点的位置
2. 法线
3. 纹理坐标

根据存储的如上数据，既可以绘制出一个图形

一些复杂的几何也是通过简单几个组合而成，组合计算一般为交集，并集，补集

### \*\*贝塞尔曲线

**
给定一个**起始点**和**终止点\*\*，中间给定若干个控制点来控制方向，由此绘制的光滑的曲线几位贝塞尔曲线

![image.png](https://cdn.nlark.com/yuque/0/2023/png/262797/1703597051807-ee1af9c4-4b44-4cf8-bfb8-133f30a9d1ce.png#averageHue=%23fcfcfb&clientId=u9273a15a-c8d8-4&from=paste&height=401&id=u39885934&originHeight=401&originWidth=717&originalType=binary&ratio=1&rotation=0&showTitle=false&size=107944&status=done&style=none&taskId=u6e635c3c-2e2c-40a0-b209-6e8313ee5e5&title=&width=717)

当控制点过度的时候，会影响绘制，一般采用分段贝塞尔曲线，例如可以以每四个控制点绘制曲线，再将其全部连接到一起

### 网格

### ![image.png](https://cdn.nlark.com/yuque/0/2024/png/262797/1704381019502-4109da30-0711-49e8-9237-d464278ac533.png#averageHue=%23dedede&clientId=ue68a95e1-eb22-4&from=paste&id=uf122248d&originHeight=367&originWidth=1323&originalType=url&ratio=1.75&rotation=0&showTitle=false&size=457463&status=done&style=none&taskId=udcadac04-871b-4332-a72b-b71d9162cce&title=)

#### 网格细分

网格面更多，模型更加精细

#### 网格简化

让网格数更少，模型更加粗糙。举个例子，当距离较远的时候，远处的模型看的不是很清楚， 没必要绘制的如此精细。

#### 网格正规化

## Ray Tracing(光线追踪)

光纤追踪就是模拟光纤传播，在模拟的过程中计算每个像素的颜色（材质 + 颜色）

在计算光线追踪之前，需要做如下假设

1. 假设光线是直线传播
2. 假设光线之间不会互相干扰
3. 假设光源是源源不断的发射光线

光线追踪的基本步骤

1. 从**观察点**到**成像平面的一个像素**连接，发出一根光线到场景中
2. 找到与场景中最先相交的点
3. 该点与光源连接，判断该点的光照情况
4. 根据判断结果，绘制该像素的颜色

![picture 0](https://cdn.jsdelivr.net/gh/yuezm/assets@main/d29c0f8b2e6919ffb08d460a2c408e702ba140ff7e7dfecd1e61ae000a88b68e.png)

光线是会反射，折射的，所以需要对光线递归追踪，具备以下特点

1. 光线的反射，折射
2. 光线存在能量衰减
3. 递归的最大次数限制，否则计算过程过于复杂

![picture 1](https://cdn.jsdelivr.net/gh/yuezm/assets@main/94910f73d77b2b2200bf7b359ed57db8d07e5b2b9f304e8d20af82a448042f77.png)

### 为什么需要光纤追踪

#### 阴影

在无光追之前，如何实现阴影呢

进行**阴影的深度测试**，一个物体或者一个区域被光源和视线观察到，有如下情况

1. 光源可以照射到，视线可以看到
2. 光源可以照射到，视线看不到
3. 光源照射不到，视线可以看到
4. 光源照射不到，视线也看不到

视线看不到的时，无需绘制，即只有在光源照射不到的时候，而视线可以看到的时候有阴影。但阴影的深度测试有如下缺点

1. 硬阴影视线较为简单，但是软阴影需要在阴影深度测试结构后，再使用阴影软化技术
2. 由于 Shadow map 分辨率的问题，容易出现锯齿，也可用阴影软化技术优化
3. 由于浮点数精度问题，在判定光源和视线时容易出现问题

![](https://cdn.nlark.com/yuque/0/2024/webp/262797/1704381970250-cd1e6ede-7f8c-4feb-b60b-3c7e41b8d38c.webp#averageHue=%23fcf5eb&clientId=ue68a95e1-eb22-4&from=paste&id=u7bad685b&originHeight=358&originWidth=779&originalType=url&ratio=1.75&rotation=0&showTitle=false&status=done&style=none&taskId=ube9fbc7a-e368-4f50-aca4-2d4a344a4e7&title=)

可以更加好的实现如下效果，效果虽好，但是相较于光栅化性能较低

1. 软阴影
2. 毛玻璃的反射效果
3. 间接光照（经过反射的光）

### Whitted-Style

#### 计算光线和场景的交点

### Path Tracing

##
