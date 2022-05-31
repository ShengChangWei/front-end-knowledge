# 1. MySQL

## 1.1. 基础篇



### 1.1.1. SQL通用语法

* SQL 语句可以单行或多行书写，以分号结尾。
* SQL 语句可以使用空格/缩进来增强语句的可读性。
* MySQL 数据库的SQL语句不区分大小写，关键字建议使用大写。
* 注释：
      - 单行注释：--注释内容 或 # 注释内容（MySQL持有）
      - 多行注释：/*注释内容*/

### 1.1.2. SQL 分类

#### 1.1.2.1. DDL

数据定义语言，用来定义数据库对象（数据库，表，字段）

查询

* 查询所有数据库

```mysql
SHOW DATABASES;
```

* 查询当前数据库

```mysql
SELECT DATABASE();
```

创建

```mysql
CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集][COLLATE 排序规则];
```

删除

```mysql
DROP DATABASE[IF EXISTS]数据库名;
```

使用

```mysql
USE 数据库名;
```

#### 1.1.2.2. DML

数据操作语言，用来对数据库表中的数据进行增删改

添加数据（INSERT）

* 给指定字段添加数据

```mysql
INSERT INTO 表名(字段名1,字段名,……) VALUES(值1,值2,……);
```

* 给全部字段添加数据

```mysql
INSERT INTO 表名 VALUES(值1,值2,……);
```

* 批量添加数据

```mysql
INSERT INTO 表名(字段名1,字段名,……) VALUE(值1,值2,……),(值1,值2,……),(值1,值2,……);
INSERT INTO 表名 VALUE(值1,值2,……),(值1,值2,……),(值1,值2,……);
```

修改数据（UPDATE）

```mysql
UPDATE 表名 SET 字段名1=值1,字段名2=值2,……[WHERE 条件];
```

删除数据（DELETE）

```mysql
DELETE FROM 表名[WHERE 条件];
```

#### 1.1.2.3. DQL

数据查询语言，用来查询数据库中表的记录

```mysql
SELECT
    字段列表
FROM
    表名列表
WHERE
    条件列表
GROUP BY
    分组字段列表
HAVING
    分组后条件列表
ORDER BY
    排序字段列表
LIMIT
    分页查询
```

基本查询

* 查询多个字段

```mysql
SELECT 字段1,字段2,字段3...FROM 表名;
```

* 设置别名

```mysql
SELECT 字段1[AS 别名1],字段2[AS 别名2]...FROM 表名;
```

* 去除重复记录

```mysql
SELECT DISTINCT 字段列表 FROM 表名;
```

条件查询

```mysql
SELECT 字段列表 FROM 表名 WHERE 条件列表;
```

* 条件

|比较运算符|功能|
|:--------:|:----:|
|>         | 大于     |
|>=        | 大于等于     |
|<         | 小于     |
|<=        | 小于等于     |
|=         | 等于     |
|<>或!=     | 不等于     |
|BETWEEN...AND...| 在某个范围之内     |
|IN(...)         | 在in之后的列表中的值，多选一     |
|LIKE 占位符     | 模糊匹配（—匹配单个字符，%匹配任意个字符）     |
|IS NULL         | 是NULL     |

|逻辑运算符|功能|
|:--------:|:----:|
|AND 或 &&        | 并且（多个条件同时成立）     |
|OR 或 \|\|      | 或者（多个条件任意一个成立）     |
|NOT 或 !         |非，不是     |

聚合函数

* 常见聚合函数

| 函数  |   功能   |
| :---: | :------: |
| count | 统计数量 |
|  max  |  最大值  |
|  min  |  最小值  |
|  avg  |  平均值  |
|  sum  |   求和   |

分组查询

```mysql
SELECT 字段列表 FROM 表名 [WHERE 条件] GROUP BY 分组字段名[HAVING 分组后过滤条件];
```

`where`与`having`区别
执行时机不同：where是分组之前进行过滤；不满足where条件，不参与分组；而having是分组之后对结果进行过滤。
判断条件不同：where不能对聚合函数进行判断，而having可以。

排序查询

```mysql
SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1,字段2 排序方式2;
```

分页查询

```mysql
SELECT 字段列表 FROM 表名 LIMIT 起始索引，查询记录数;
```

#### 1.1.2.4. DCL

数据控制语言，用来创建数据库用户、控制数据库的访问权限

管理用户

* 查询用户

```mysql
USE mysql;
SELECT * FROM user;
```

* 创建用户

```mysql
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
```

* 修改用户密码

```mysql
ALTER USER '用户名'@'主机名' IDENTIFIED WITH mysql_native_password BY '新密码'；
```

* 删除用户

```mysql
DROP USER '用户名'@'主机名';
```

权限控制

* 查询权限

```mysql
SHOW GRANTS FOR '用户名'@'主机名';
```

* 授予权限

```mysql
GRANT 权限列表 ON 数据库名.表名 TO '用户名'@'主机名';
```

* 撤销权限

```mysql
REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名';
```

### 1.1.3. 函数

#### 1.1.3.1. 字符串函数

```mysql
CONCAT,LOWER,UPPER,LPAD,RPAD,TRIM,SUBSTRING
```

#### 1.1.3.2. 数值函数

```mysql
CEIL,FLOOR,MOD,RAND,ROUND
```

#### 1.1.3.3. 日期函数

```MYSQL
CURDATE,CURTIME,NOW,YEAR,MONTH,DAY,DATE_ADD,DATEDIFF
```

#### 1.1.3.4. 流程函数

```MYSQL
IF,IFNULL,CASE[...]WHEN...THEN...ELSE...END
```

### 1.1.4. 约束

#### 1.1.4.1. 非空约束

```mysql
NOT NULL
```

#### 1.1.4.2. 唯一约束

```MYSQL
UNIQUE
```

#### 1.1.4.3. 主键约束

```MYSQL
PRIMARY KEY
```

#### 1.1.4.4. 默认约束

```MYSQL
DEFAULT
```

#### 1.1.4.5. 检查约束

```MYSQL
CHECK // 储存的值达到某种条件
```

#### 1.1.4.6. 外键约束

```MYSQL
FOREIGN KEY
```

### 1.1.5. 多表查询

#### 1.1.5.1. 多表关系

* 一对多：在多的一方设置外键，关联一的一方的主键
* 多对多：建立中间表，中间表包含两个外键，关联两张表的主键
* 一对一：用于表结构拆分，在其中任何一方设置外键（UNIQUE），关联另一方的主键

#### 1.1.5.2. 多表查询

内连接

* 隐式

```mysql
  SELECT...FROM 表A,表B WHERE 条件...
```

* 显式

```mysql
SELECT...FROM 表A INNER JOIN 表B ON 条件...
```

外连接

* 左边

```mysql
SELECT...FROM 表A LEFT JOIN 表B ON 条件...
```

* 右边

```mysql
SELECT ...FROM 表A RIGHT JOIN 表B ON 条件...
```

自连接

```mysql
 SELECT...FROM 表A 别名1,表A 别名2 WHERE 条件...
```

子查询

```shell
标量子查询、列子查询、行子查询、表子查询
```

### 1.1.6. 事务

#### 1.1.6.1. 事务简介

事务是一组操作的集合，这组操作，要么全部执行成功，要么全部执行失败。

#### 1.1.6.2. 事务操作

```mysql
START TRANSACTION; // --开启事务
COMMIT / ROLLBACK; // --提交/回滚事务
```

#### 1.1.6.3. 事务四大特性

```mysql
原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）
```

#### 1.1.6.4. 并发事务问题

```shell
脏读、不可重复读，幻读
```

#### 1.1.6.5. 事务隔离级别

```mysql
READ UNCOMMITTED、READ COMMITTED、REPEATABLE READ、SERIALIZABLE
```

## 1.2. 进阶篇