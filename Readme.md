# 目标

此项目记录游戏的中局存档逆向结果，可用于游戏中局存档数据的识别操作。  
非成就、图鉴等永久性数据。而是游戏的中局存档。  

# 项目结构

- save-data.bt是通过逆向分析得到的存档数据结构，可以使用010 Editor快速解析存档（仅测试144版本）
- generate_reader.js读取save-data.bt并解析文件中的token流，通过简单的词法/语法分析，将.bt模板转换为save-data.js文件
- save-data.js文件中的函数可以解析游戏存档内容，read_state.js是一个样例
- generate_reader.js可以认为是一个超级简易的编译器，虽说不完美，但它能够完成存档分析的JavaScript函数的生成工作。