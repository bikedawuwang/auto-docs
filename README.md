# auto-docs

A gadget that automatically generates document catalogs and outputs documents

## If you want to use it

1. 安装 / install

```shell
    npm install -g auto-js-docs
```

2. 创建配置文件 / create profile

```shell
    autodocs2md i
```

```shell
    autodocs2md init
```

3. 生成目录 / Generated directory

```shell
    autodocs2md c
```

```shell
    autodocs2md create
```

这会帮助你创建文档目录

4. 生成文档 / Generate documents

```shell
    autodocs2md r
```

```shell
    autodocs2md run
```

## How to configure configuration files

1. 您可以配置目录结构和通过配置文件生成的文档


你可以自行创建配置文件 ```autoDocs.json```（命名必须为autoDocs）

文件结构如下

```javascript
{
   "filePath": [
      "docs"
   ],
   "fileDocs": [
      {
         "from": "lib/a.js",
         "to": "docs/a.md"
      }
   ]
}

```

filePath 规定了你所需要的目录结构 但是层级不要超过10级
filePath 必须是 Array <br>
您也可以这样配置

```javascript
    "filePath": [
        "docs",
        "docs/aaa/bbb/ccc"
   ],
```

fileDocs 规定了你所需要生成文档的文件以及输出位置与输出名
fileDocs 必须为 Array <br>
你可以这样配置

```javascript
    "fileDocs": [
        {
         "from": "lib/a.js",
         "to": "docs/aaa/a.md"
        },
        {
         "from": "lib/b.js",
         "to": "docs/bbb/b.md"
        },
    ]
```

如果您不想手动创建  ```autoDocs.json``` 
您可以通过

```shell
    autodocs2md init
```

 或者

```shell
    autodocs2md i
```

来帮助你创建配置文件
