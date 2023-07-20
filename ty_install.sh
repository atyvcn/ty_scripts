#!/usr/bin/env bash
#依赖安装，运行一次就好
#0 8 5 5 * jd_indeps.sh
#new Env('依赖安装');
#

npm_ver=`pnpm -v|awk -F. '{print $1}'`
if [[ $npm_ver -ge 7 ]];then
    export PNPM_HOME="/root/.local/share/pnpm"
    export PATH="$PNPM_HOME:$PATH"
fi

echo -e "安装脚本所需依赖，不一定一次全部安装成功，请自己检查\n"
echo -e "开始安装............\n"

#apk add g++ make --no-cache
if ! command -v pnpm &> /dev/null; then
    echo "请先安装pnpm。"
    #exit 1
else
    #pnpm config set registry https://registry.npm.taobao.org
    #pnpm install -g
    packages=("xhr2" "tough-cookie" "https-proxy-agent")
    for package in "${packages[@]}"; do
        if ! pnpm list -g --depth=0 "$package" &> /dev/null; then
            echo "$package 依赖未安装，正在安装..."
            pnpm install -g "$package"
        else
            echo "$package 依赖已经安装。"
        fi
    done
    #rm -rf /usr/local/pnpm-global/5/node_modules/.pnpm/canvas*
    #rm -rf /root/.local/share/pnpm/global/5/.pnpm/canvas*
fi

if ! command -v pip3 &> /dev/null; then
    echo "请先安装pip3。"
    #exit 1
else
    packages=("requests")
    for package in "${packages[@]}"; do
        if ! pip3 show "$package" &> /dev/null; then
            echo "$package 依赖未安装，正在安装..."
            pip3 install "$package"
            #pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple/ jieba
        else
            echo "$package 依赖已经安装。"
        fi
    done
fi

echo -e "\n所需依赖安装完成，请检查有没有报错，可尝试再次运行"